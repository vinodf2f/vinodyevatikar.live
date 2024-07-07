---
title: Automating Web Application Updates in ATMs and Kiosks - A Seamless Reload Strategy
date: 07-07-2023
author: [Vinod]
tags: [Kiosk Mode, ATM software, Polling, Real-Time Updates Strategies, React, Websocket, SSE ]
---

One of my project at work is a web application that works in kiosks mode. "Kiosk mode is a feature in Windows operating system (OS) that allows a device to run only specified applications and settings". This application runs in a ATM like tower which is open 24\*7. The problem we had is to update the app without reopening of reloading manually to get the latest updates whenever available. We had two options to solve this.

1. Websocket/Server Side Events
2. Polling (calling for the HTML file).

 ####  Websocket/Server Side Events

To go ahead with this approach, we will need changes on both server and client for the Websocket/SSE setup. With each deployment we will have to send the notification to all connected client with an event on which we can show user a prompt for the app update. This can be complex as we will have to some webhooks setup to automate, This approach will be more efficient but require additional infrastructure and complexity.Also require a persistent connection.

 #### Polling (Calling Html file)

This approach simple to implement but less efficient and introduces a delay in updates. We have configured in webpack to using chunk hash to all output files(main.123.js). With each app release build main js files gets different chunk with file name (main.1234.js). We store the chunk value of main js file as version in session storage. On app load we have polling implementation for html file to check if we have new version available for each hour. In our case we do the deployments after ban hours, doesn't affect the customers.


```js

//basic webpack config to add chunkhash to output file
module.exports = {
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js', 
  },
};
```

```js
//Main file
  const appUpdateCheckInterval = isProd ? 1000 * 60 * 60 : 100 * 60 * 5;
  setInterval(() => {
    checkForNewVersion()
  }, appUpdateCheckInterval);
```

```js
//Util file
const checkForNewVersion = async() =>{
try {
  const currentMainHash = sessionStorage.getItem("MAIN_HASH");
  const headers = new AxiosHeaders();
  headers.set("Cache-control", "no-cache", "no-store", "must-revalidate");

  const { data, status } = await axios.get("your-app.url");
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(data, "text/html");
  const mainScript = htmlDoc.querySelector('script[src*="main"]');
  const hash = mainScript?.getAttribute("src")?.split(".")[1]; // Output path can be defined in webpack config

  if (!currentMainHash) {
    sessionStorage.setItem("MAIN_HASH", hash);
    //For the first app load, set the hash(version)
  } else if (status === 200 && !!hash && hash !== currentMainHash) {
    //Show user prompt with app update
    //Clear store or any operation
    window.location.reload();
  }
} catch (error) {
  Logger.error("could not check/update version", error);
}
}
```

In above code, we are using sessionStorage to maintain app version(MAIN_HASH) to ensure user will always check for latest updates when they open application.

We have to set `Cache-control` headers to `"no-cache", "no-store", "must-revalidate"` when making the request to check for a new version. These headers instruct the browser and any intermediate caches (like CDNs) to get the latest version of the HTML file without using a cached copy. This is crucial for ensuring that the update check is always performed against the most current version available on the server.

That it! It works Seamless in one our Kiosks App.

Thanks for reading!

