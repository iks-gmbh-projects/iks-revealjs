# Plugin: slideChangeTracker

reveal.js-Plugin um alle Folienwechsel in einer AWS DynamoDB zu persistieren. Das Plugin fügt beim Laden der Präsentation einen "Start/Stop"-Button in die Präsentation ein. Mithilfe dieses Buttons kann das Persistieren von Folienwechseln aktiviert bzw. deaktiviert werden.



## Plugin in eigener Präsentation nutzen
Um das Plugin in einer Präsentation nutzen zu können, müssen folgende Dinge beachtet werden:

1. benötigtes CSS-File einbetten
```html
<link rel="stylesheet" href="plugin/slideChangeTracker/style.css">
```
2. AWS Amplify per CDN einbetten
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/aws-amplify/4.3.20/aws-amplify.min.js"></script>
```
3. Plugin-File laden und in Pluginliste hinzufügen
``` js

import slideChangeTracker from "./plugin/slideChangeTracker/plugin.js"

Reveal.initialize({
[...]
plugins: [slideChangeTracker],
[...]
)}
```

3. Pluginkonfiguration übergeben

Damit die Folienwechsel in AWS DynamoDB persistiert werden können muss dem Plugin einiges an Konfiguration mitgegeben werden. (siehe: [AWS Amplify-Konfiguration](https://docs.amplify.aws/lib/client-configuration/configuring-amplify-categories/q/platform/js/#scoped-configuration))

### Beispielkonfiguration:
```js
import slideChangeTracker from "./plugin/slideChangeTracker/plugin.js"
		Reveal.initialize({
			[...]
			
			plugins: [slideChangeTracker],
			slideChangeTracker: {
				Auth: {
					mandatorySignIn: true,
					region: 'eu-central-1',
					userPoolId: 'eu-central-1_nAwSWW1wy',
					userPoolWebClientId: '500qb0j9lbso7u6btkcjlfr330',
					oauth: {
						domain: 'slideevents-login.auth.eu-central-1.amazoncognito.com',
						scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
						redirectSignIn: 'https://127.0.0.1:5500/vortrag-mlops/iks-revealjs/revealjs/vortrag_mlops.html',
						redirectSignOut: 'https://127.0.0.1:5500/vortrag-mlops/iks-revealjs/revealjs/vortrag_mlops.html/signout',
						responseType: 'code'
					}
				},
				api_gateway_url: "https://jb7lc0n57i.execute-api.eu-central-1.amazonaws.com/slideevents",
				slide_title: "Mein Präsentationstitel"
			}
		});
	</script>
```
### Konfigurations-Parameter

[TODO]