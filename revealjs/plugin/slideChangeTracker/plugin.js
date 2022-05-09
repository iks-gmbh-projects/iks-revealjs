import { postToApi } from "./http-service.js";
import { getFlattenedSlidenumber, getTotalSlideNumbers } from "./helpers.js";

const DEFAULT_AUTH_CONFIG = {
  mandatorySignIn: true,
  region: "eu-central-1",
  userPoolId: "eu-central-1_nAwSWW1wy",
  userPoolWebClientId: "500qb0j9lbso7u6btkcjlfr330",
  oauth: {
    domain: "slideevents-login.auth.eu-central-1.amazoncognito.com",
    scope: [
      "phone",
      "email",
      "profile",
      "openid",
      "aws.cognito.signin.user.admin",
    ],
    redirectSignIn:
      "https://127.0.0.1:5500/vortrag-mlops/iks-revealjs/revealjs/vortrag_mlops.html",
    redirectSignOut:
      "https://127.0.0.1:5500/vortrag-mlops/iks-revealjs/revealjs/vortrag_mlops.html/signout",
    responseType: "code",
  },
};

const slideChangeTracker = () => {
  async function getUserName() {
    const username = await aws_amplify.Amplify.Auth.currentAuthenticatedUser();
    return username.username || "";
  }

  async function login() {
    try {
      await aws_amplify.Amplify.Auth.currentAuthenticatedUser();
      //console.debug("AWS user is successfully logged in", aws_amplify.Auth.currentAuthenticatedUser())
    } catch (e) {
      //console.debug("No AWS user is logged in. Redirect to Cognito Login..")
      await aws_amplify.Amplify.Auth.federatedSignIn();
    }
  }

  function getPluginConfig(deck) {
    try {
      return deck.getConfig().slideChangeTracker;
    } catch (e) {
      console.error("No Plugin configuration passed");
    }
  }

  function fillConfigWithDefaults(deck) {
    const config = getPluginConfig(deck);
    config.api_gateway_url =
      config.api_gateway_url === undefined
        ? "https://jb7lc0n57i.execute-api.eu-central-1.amazonaws.com/slideevents"
        : config.api_gateway_url;
    config.slide_title =
      config.slide_title === undefined ? document.title : config.slide_title;
    config.Auth = config.Auth === undefined ? DEFAULT_AUTH_CONFIG : config.Auth;
  }

  async function initialize_amplify(aws_config) {
    aws_amplify.Amplify.configure({ Auth: aws_config });
  }

  async function createSlideChangeEvent(deck, slide_title) {
    const flattenedSlideNumber = getFlattenedSlidenumber(deck);
    const totalSlideNumbers = getTotalSlideNumbers(deck);
    const date = new Date().toISOString();
    const user = await getUserName();
    const dateString = date.replace(/[^0-9]/g, "").slice(0, -3);
    const slideChangeEvent = {
      part_name: `${slide_title
        .replaceAll(/[ -.]/g, "_")
        .toLowerCase()}_${dateString}`,
      timestamp: date,
      flattenedSlideNumber: getFlattenedSlidenumber(deck),
      slideNotation: `${flattenedSlideNumber}/${totalSlideNumbers}`,
      user: `${user}`,
    };
    return slideChangeEvent;
  }

  function addStartStopButton(reveal) {
    const button = document.createElement("button");
    button.textContent = "\u23F5";
    button.classList.toggle("slidechange-track-button");

    button.addEventListener("click", async function (event) {
      button.innerText = button.innerText === "\u23F5" ? "\u23F8" : "\u23F5";
      reveal.getConfig().writeSlideChanges =
        reveal.getConfig().writeSlideChanges === true ? false : true;
      await login();
    });
    document.querySelector(".reveal").parentElement.appendChild(button);
  }

  return {
    id: "slideChangeTracker",
    init: async function (deck) {
      fillConfigWithDefaults(deck);
      const { Auth, api_gateway_url, slide_title } = getPluginConfig(deck);
      initialize_amplify(Auth);
      const slideChangeEvents = [];
      addStartStopButton(deck);
      deck.on("slidechanged", async (event) => {
        const slideEvent = await createSlideChangeEvent(deck, slide_title);
        if (deck.getConfig().writeSlideChanges) {
          const result = postToApi(api_gateway_url, slideEvent);
          //console.log(result);
        }
        slideChangeEvents.push(slideEvent);
        //console.log(slideChangeEvents);
      });
    },
  };
};
export default slideChangeTracker;
