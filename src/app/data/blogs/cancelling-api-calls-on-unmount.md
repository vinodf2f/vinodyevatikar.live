---
title: Cancelling API Calls on Unmount - Enhancing Application Performance and Preventing Memory Leaks
date: 21-06-2023
author: [Your Name]
tags: [API, performance, memory leaks, web development]
---

In modern web development, it is common to interact with APIs to fetch data and update the user interface dynamically. However, when a component making an API call is unmounted before the response is received, it can lead to performance issues and potential memory leaks. In this blog post, we will explore the impact of cancelling API calls on unmount and discuss strategies to prevent such issues.

### How does it affect application performance?

When an API call is made from a component and the component is unmounted before the response is received, it can cause performance issue:

1. Wasted resources: The API call may continue to execute on the server, consuming valuable server resources even though the response is no longer needed.
2. Unnecessary rendering: Unmounting a component during an API call can cause unnecessary rendering.
3. Potential memory leaks: API call on unmount can result in the storing of unnecessary data in memory, leading to memory leaks over time. Especially when using shared resources or global state.

You might have encountered this error before -

![Can't perform a React state update on an unmounted component #353](https://user-images.githubusercontent.com/5436545/52732871-89498080-2fc1-11e9-960b-3f81ff6844ba.png)

Checkout this example where child component is unmounted still we are rerendering

<iframe src="https://codesandbox.io/embed/musing-allen-hvlwd7?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="musing-allen-hvlwd7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### How can we prevent this?

We can improve efficiency by cancelling the API call and not setting the response if the component is not mounted  which would minimize unnecessary network requests and server resource.

To cancel api call we can use

- Cancel token from axios
- AbortController,a built-in browser API

##### Cancel Token with axios

```js
import { useEffect } from "react";
import axios from "axios";
const MyComponent = () => {
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const fetchData = async () => {
      const response = await axios.get("/api/data", {
        cancelToken: cancelToken.token,
      });
    };
    fetchData();
    return () => {
      cancelToken.cancel("Component is unmounting");
    };
  }, []);
  // Component logic
};
```
##### Using AbortController

```jsx
export default function MyComponent() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
        const response = await fetch('/api/data', {
          signal: abortController.signal
        });
        const jsonData = await response.json();
        setData(jsonData);
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);
}
```


###  where we can use these methods

Cancelling API calls on unmount is particularly important in the following scenarios:

1. Dynamic rendering: When rendering components dynamically based on user interactions or route changes, it's crucial to cancel ongoing API calls for components that are being unmounted. This prevents rendering unnecessary data or conflicting updates.

2. Fast navigation: In situations where users quickly navigate between different views or pages, cancelling API calls on unmount becomes essential. This ensures that the application only fetches data that is relevant to the current view.

3. File uploading: Canceling API calls becomes even more critical in scenarios where large file uploads are involved. It is common for users to accidentally upload the wrong file, navigate away from the page, or perform other actions while the upload is in progress. In such cases, utilizing the API call cancellation method becomes highly beneficial:

Failing to cancel API calls on unmount can lead to memory leaks over time. To avoid this, make sure to clean up any event listeners, subscriptions, or references that are associated with the API call.

Thanks for reading!
