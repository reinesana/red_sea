# Red Sea
### 🌟 runner-up of cmd-f 2024 hackathon 🌟

<ul>
  <li>Podium Prize: 2nd place - Community Track</li>
</ul>

### Demo:
[![demo video](https://github.com/reinesana/red_sea_app/assets/153279125/ce9d6b0a-bf72-4f0f-b435-c85b400e7401)](https://youtu.be/LY2TVymYyNM?si=OUKO4GjqYFazqQh8 "Red Sea DEMO")

<br>

## Problem Statement
Over 5000 women in Gaza are facing harsh, unsafe, and unhealthy conditions due to continuous Israeli bombardment, displacement, and forced migration. The challenging access to humanitarian aid exacerbates these issues, leading to stillbirths and maternal deaths. Additionally, approximately 2.3 million individuals are currently afraid to leave their homes after recent bombings destroyed safe routes, further amplifying the crisis.

As we proceeded through cmd-f 2024, our objective was to provide refugee women with: 
<ol>
  <li>safe routes: mapped-out paths to refugee camps form any location in Gaza, prioritizing safe passage through conflict zones</li>
  <li>assistance resources: access to humanitarian aid and emergency hotlines on their journey </li>
  <li>medical resources: access to hospitals in Gaza</li>
  <li>safety resources: quick access to safety tips and instructions for their journey.</li>
</ol>

<br>

## Description
Red Sea is a web application that uses a dataset of real-time conflicts in Gaza to optimize safe routes for refugee women looking for a safe passage to refugee camps in Gaza. The user can request for humanitarian aid based on their personal needs and also has an option to view medical facilities nearby. The web application also offers various language options and easy to use interface for immediate assistance. 

<br>

## Implementation
Red Sea uses real time data on the coordinates, fatalities and conflict zones in Gaza from ACLED. The application assigns a safety level to each coordinate based on the type of event (riots, air strike, protests. etc) and the number of fatalities. Leveraging a KNN machine learning model, we were able to assign a safety level to surrounding roads on a route using forward geocoding from MAPBOX API, optimizing the safest route for the user. The frontend was built using React and MapBox API for fetching building the map and fetching the routes. Additionally, the machine learning model was built using python and flask.

* data from acleddata.com
 <br>

## Accomplishments
Our biggest accomplishment was being able to leverage routes using machine learning. Extracting the coordinate points on the route and assigning safety levels was troubling, however, we were successful in the end. We are also proud of the UI design on the landing page, where we feature a rotating globe as well as language setting options for the user. 

<br>

## What we learned
Our team members were all unfamiliar with using flask and fetching MapBox API, thus, being able to connect the backend and the frontend was a skill we believed to be useful for future projects. We also learnt content planning and usability priority within the app and how to best serve the user.

<br>

## What's next for Red Sea
In the future, we would like to further leverage the tool by incorporating news scraping to get more conflict zones data.
We would also like to have a registration system prior to arriving at a hospital as well as a proper toggle for displaying hospital pop-ups. We would also use the Google translate API for diverse language application for the app to accommodate Arabic.

