//import DynamoDBClient from '../../node_modules/@aws-sdk/client-dynamodb/dist-cjs/DynamoDBClient.js';
//import { ddbClient } from "./ddbClient.js";

const Plugin = () => {
    function getFlattenedSlidenumber(reveal) {
        return reveal.getSlides().indexOf(reveal.getCurrentSlide());
    }

    function getTotalSlideNumbers(reveal) {
        return reveal.getSlides().length;
    }

    function addButton(reveal) {
        const button = document.createElement("button");
        button.textContent = "►";
        button.style.cssText = "position: absolute;bottom: 0.5em; right: 0.5em;"
        button.classList = "button-active";
        button.addEventListener("click", function (event) {
            button.classList.toggle("button-active");
            button.textContent = button.textContent === "►" ? "⏸" : "►";
            reveal.getConfig().writeSlideChanges = reveal.getConfig().writeSlideChanges === true ? false : true;
        });
        document.querySelector(".reveal").parentElement.appendChild(button);

    }

    function initDynamoDBClient(reveal) {
        const client = DynamoDBClient()
        console.log(client);
    }

    return {
        id: 'slideChangeTracker',
        init: function (reveal) {
            //initDynamoDBClient();
            const slideChangeEvents = [];
            console.log("Config", reveal.getConfig().slideChangeTracker)
            console.log("SlideChangeTracker plugin was loaded")
            reveal.on("slidechanged", (event) => {
                const flattenedSlideNumber = getFlattenedSlidenumber(reveal);
                const totalSlideNumbers = getTotalSlideNumbers(reveal);
                const dateEvent = {
                    "timestamp": new Date().toISOString(),
                    "flattenedSlideNumber": getFlattenedSlidenumber(reveal),
                    "slideNotation": `${flattenedSlideNumber}/${totalSlideNumbers}`,
                }
                if (reveal.getConfig().writeSlideChanges) {
                    // TODO: AWS-Krams einbinden
                    // TODO: Slide-Change-Event wegschreiben
                    slideChangeEvents.push(dateEvent);
                }
                console.log(slideChangeEvents)
            })
            addButton(reveal);
        }
    }
}

export default Plugin;


