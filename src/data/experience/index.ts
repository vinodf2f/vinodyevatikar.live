export type IExperienceData = {
  designation: string;
  companyName: string;
  location: string;
  duration: string;
  markdown: string;
};

export const ExperienceData: IExperienceData[] = [
  {
    designation: "Senior Development Engineer 2 (React Native)",
    companyName: "MPL (Striker.club)",
    location: "Banglore, India",
    duration: "(June 5 - current)",
    markdown:
      "<p> I recently joined Striker, a digital sports fantacy gaming platform. In my current role, I am actively involved in the development of both the Striker website and the Striker app. </p> <p> The Striker website is built using Next.js and powered by a CMS platform, while the Striker app is developed entirely in React Native. My current focus is on refactoring the codebase to enhance maintainability and scalability, as well as implementing performance improvements to ensure a smooth user experience. </p> <p> Tech Stack: React, React Native, Next.js, Typescript </p>",
  },
  {
    designation: "Senior Software Engineer 1",
    companyName: "Makemytrip / Goibibo",
    location: "Gurgaon, India",
    duration: "(Aug 26 - june 2)",
    markdown:
      "<p> As a part of the postsales engineering team at MakeMyTrip/Goibibo, I have worked on all platforms (App/Web app/PWA) for both brands. In recognition of my contributions, I received the <strong>Super Starter Award</strong> in Q3 of 2021-22. MakeMyTrip is one of the largest online travel agencies in India, with the MakeMyTrip app/website receiving monthly 50M visits and Goibibo around 19M visits. </p> <p> Here are some of my accomplishments: </p> <ul> <li>Successfully implemented various optimization tasks in the React Desktop app, including Dockerization, Nginx config migration, webpack migration, and sourceMap file upload automation for better debugging.</li> <li>Built an internal logging react app from scratch that displays customer journey logs and logs on all API levels. This app is used internally by engineering teams and leadership.</li> <li>Developed a custom routing solution in the React-Native-Web app to enhance user experience and implemented customizable theming for different types of user profiles.</li> <li>Contributed to the development of key features and components in both React Native and React apps, such as caching middleware, last-minute cancellation flow, and various common features for other developers to use. I actively participated in code reviews, bug fixing, and collaborated with stakeholders for timely project delivery.</li> </ul> <p> Tech Stack: React Native, React, React-Native-Web, Typescript </p>",
  },
  {
    designation: "Software Engineer",
    companyName: "GeekyAnts Software Pvt Ltd",
    location: "Bangalore, India",
    duration: "(Sept 19 - Aug 21)",
    markdown:
      "<p> With Geekyants, I had the opportunity to contribute to the development of diverse projects for different clients. Here are some notable projects I worked on: </p> <ul> <li> Bike rental and Car pool App: <ul> <li>Contributed to enhancing the payment module, onboarding flows, and user profile screens using a combination of Native Android and React-Native technologies.</li> </ul> </li> <li> Video calling app: <ul> <li>Collaborated with the team to build a platform for mental health discussions, utilizing technologies such as Twilio SDK, Firebase, and React-Native with Redux.</li> </ul> </li> <li> Utility Service Provider Mobile Application: <ul> <li>Contributed to the development of an iOS/Android app for managing service accounts using React Native CLI and state management with Redux and Redux-Saga. Also made custom changes to the react-native-rename library.</li> </ul> </li> <li> Supplier portal for an electric vehicle automaker: <ul> <li>Designed and developed core components and worked on order and transportation management features using technologies like ReactJS, Redux, Reselect, AWS, GraphQL, MaterialUI, and React-virtualised.</li> </ul> </li> </ul>",
  },
];
