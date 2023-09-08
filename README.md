# Take-home Exercise
As part of the hiring process, you will be provided with a coding exercise to complete and return.  
This project serves as a React web app template, written in your choice of Javascript or Typescript (rename the files to .tsx for Typescript), that you can use to kick-start your app.    
Feel free not to use it if you prefer.  
You may also install whatever libraries and tools you are most comfortable developing with (e.g. Redux, Styled Components/JSS, etc.).  

## How to run
* Run `npm i && npm run build`
* Run `node server.js`
* Navigate to `localhost:3000` 

## Tasks
Create a single-page web application - Getflix - that allows a user to enter criteria into a search input field and display matching titles on the page. For each search result, show the title, the poster, and year it released.

Clicking on a title should bring up a detailed view of the title - plot, cast, etc.  
Have a look at the API documentation from the OMDB API https://www.omdbapi.com/ to fetch movie data.  
You can create your own API key or use: **320f6ab2** (for example http://www.omdbapi.com/?i=tt3896198&apikey=320f6ab2)
* The app should be responsive, i.e. compatible with different screen sizes.
* Don't worry about trying to be IE9 compatible - use as modern a framework/JS/CSS/HTML as is sensible (i.e. works on a popular browser I downloaded today).
* Feel free to use whatever libraries you think are necessary (CSS/JSS component providers, state management, routing).
* Writing tests is always a plus.
* This scaffolding supports Typescript if you prefer, but it's not required for this exercise.

Stretch goals:
* The API currently returns titles in lots of 10 - if you can, use the page parameter to request more as you scroll.
* If you have time, we'd love to see any embellishments (e.g. animations, transitions, dynamic fetching/loading).

When you're done, please provide the recruiter with the source code in a way that makes sense - zip file is fine, a link to a public repository like GitHub works too. Please provide some instructions for us to run the app (and the tests).

## Copyright and Licensing

Copyright 2023 Tyro Payments Limited

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "
AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
language governing permissions and limitations under the License.
