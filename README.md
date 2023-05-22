
Main branch contains the User Login and Sign Up UI for the RideSync App. There are 4 screens available: Start, Login, Register, Loading.
Vinay's branch contains the map integrated with Google Cloud APIs (Google Maps API + Google Places API).

Here's our demo of the log in part:
https://drive.google.com/file/d/1JTzeesMdfBFKNturv_6hYMWZkrMaFn_U/view?usp=sharing

Here's our demo of the google maps api working:
https://drive.google.com/file/d/1zOdQ1U4zR0aPn9zs1Atiw-qf5kzDIhRn/view?usp=sharing

## How to use?

Access the UI on web:
https://snack.expo.dev/@ylylime/ridesync

OR 

1. Download or clone this repo.

2. Install dependencies.

```js
npm install
// or
yarn install
```

3. Run project on iOS / Android.

```js
 npm run ios // npm run android
 // or
 yarn ios // yarn android
```

## What it does
RideSync is a user-friendly ride-sharing app designed to simplify your daily commute. Our platform connects drivers and riders who share similar routes and live in similar areas, making carpooling more accessible and cost-effective.

With RideSync, drivers have the flexibility to schedule their rides in advance or provide a 15-minute notice before departure. Riders within a 0.25-mile radius can request to join their journey, minimizing inconvenience for drivers.

By having the app more driver-focused we create a more economically friendly ride-sharing environment. We prioritize affordability, ensuring that our fares are significantly lower than traditional ride-hailing services. By sharing rides, drivers can save on fuel costs while riders enjoy pocket-friendly fares.

Safety is our top priority. In response to recent incidents in the area, RideSync fosters accountability and safety by promoting carpooling. This creates a safer environment where drivers and riders can rely on each other for their daily commutes.

We are also trying to align with the United Nations' 17 Sustainable Development Goals, RideSync strives to contribute to a more sustainable future. Through carpooling, our app promotes Goal 11: Sustainable Cities and Communities, by reducing traffic congestion and carbon emissions. By facilitating ride-sharing, we support Goal 13: Climate Action, by encouraging a more efficient use of vehicles and reducing overall environmental impact. Additionally, by fostering community connections and accountability, we contribute to Goal 16: Peace, Justice, and Strong Institutions, promoting a safer environment. 

## Inspiration
Our inspiration stems from a desire to make a positive impact on our community. Recent incidents of violence in our area have raised concerns about safety, and we believe that a collective effort can address this issue by providing more opportunities for people to travel safely together.

Through convenient scheduling and affordable fares, RideSync empowers drivers and riders alike. By participating in our platform, you join a movement that embraces safety and community-building. This also benefits the environment by reducing carbon emissions from traffic.


## How we built it
For the designing of all the functionalities and UI of the app prototype, we used FIGMA.
For the actual coding aspect of our app, we initially wanted to focus on showing the back-end functionality of connecting the drivers and users using mongoDB but the way we were trying to implement wasn't compatible. So we implemented the google maps to show on the app and pin point the exact location that the user types in! We also implemented the logging in of the users!

## Challenges we ran into
Designers: Figma has some functionalities which were working weirdly such as the adjustment of some components which won't shrink, it was also difficult to integrate all the features with a smooth consistent flow. But we were able to work around them! 
Developers: React Native requires careful consideration and expertise to implement mobile applications efficiently. With the level of web dev experience of our team and especially the stubbornness of react-native and it's incompatibility with mongoDB we struggled to implement the driver user connection through backend.  And just connecting mongoDB with our react-native app. 

## Accomplishments that we're proud of
As this is most of our teams first hackathon and most of us have no experience in building a react-native app from scratch, we're very proud of implementing different parts of the entire app such as the log in feature, the google maps and attempting to use mongoDB with no backend knowledge or experience. We stuck together and did not give up even after the setback of not getting mongoDB to work in react-native which we had spent basically half of out time on. The designers also learned a lot on devising an entire app, with all the functionalities that we had discussed to be implemented.

## What we learned
Design:
We learnt how to make illustrations from scratch on Figma and how to fix the missing fonts error. Most of all, we learned how to work together to produce an app prototype with the styles and functionalities that we all agree upon and also fit together smoothly.

Coding:
We learned the technology required to run React Native almost completely from scratch. Since none of us had extensive understanding of the technology, there was a large learning curve. However, we learned enough to implement different APIs and create Google Map integration. 

## What's next:
At present, our primary focus lies in the implementation of RideSync within the Davis community. However, we have a future-oriented vision to expand our services to additional communities and regions. While our current offering may not encompass all the features depicted in our Figma designs, we are committed to enhancing our user interface and further developing the application to incorporate these envisioned features. It is our utmost priority to deliver a comprehensive and refined user experience that aligns with our long-term objectives.

## Support
<a href="https://reactnativemarket.com/" rel="nofollow" target="_blank">
  React Native Templates & Starter Kits and Apps for easier start.
</a>

- Figma
- google-cloud
- google-maps
- google-places-autocomplete
- mongodb
- react-native


