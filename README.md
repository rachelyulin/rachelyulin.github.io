# PROJECT NAME AND SUMMARY
Begin with your project name, and a summary of what your project is about. Briefly describe
the motivations of the owners who kickstarted this project. Treat it as an elevator pitch for your
project.
* Describe the context of your project. If the project is based on a complex premise,
explain the content so that the reader can understand it.
* Describe each target audience group and their characteristics
* Describe the user goals and the organization's goals
* Make sure to justify why the project should exists
* Include a URL to the deployed version of your project

# UX/UI
This section should:
* List down the user stories and their acceptance criteria.
* Share links to wireframes, mockups, diagrams that are used in the UI/UX processes.
Those files can be pushed to the Github repository, or be placed in a separate PDF file
as part of the repository.
* Describe what your considerations were for the Five Planes of UI/UX, such as the choice
of color and fonts for the surface plane, or information organization strategy for the
structure plane.
# FEATURES
List down the major features of your application, and also the algorithms that you have used
to implement those features. If there are any limitations or bugs, please describe them as well.
If you have any features pending implementation, you can also take the opportunity to discuss
them here.
* The main features in the dashboard would be the light/dark mode and the dropdown selection option, that utilises the darkmode function and salesTracker function respectively. For future implementation, it would be more beneficial to have a database to hold and store historial and live values. With these data, machine learning can be applied to provide predictive maintenance and analytics of motors and sensors.
# USER STORIES
If you wish to present the features list in a form more suitable for software development, you
can write them as user stories instead.
A basic user story consists of:
* The role, or type of the user
* A statement describing what the user wishes to a
* A statement describing the intent of the user
* Explain what features in your application can meet this particular user story.
  * Robot operator is to check on robot's heath statuses of the various motors, sensor payloads and radio comms power readings. User can access the various charts containing the data. The user can access the sensor payload chart that shows the selected sensor data. Below the chart, there is a dropdown select option to select and view/toggle to other payload sensor readings.
  * Robot operator may view the dashboard in a day/night setting or have certain colour preferences. The dashboard has a checkbox option to toggle between light/dark mode, that influences the background and font colours.
# TECHNOLOGIES USED
Provide an overview of the languages, frameworks, libraries and any other tools that you
have used to produce the project. Be sure to provide a short description of where in the
project the technology is used, and a URL to its Github repository.
* Mobile first web development using CSS and HTML, with vanilla JavaScript. 
* Used Chart.js , a javaScript charting library
* Used Axios, to make HTTP requests
* Used 3 APIs to simulate robot sensors' values from : 
  * https://api.data.gov.sg/v1/environment/air-temperature
  * https://api.data.gov.sg/v1/environment/wind-speed
  * https://api.data.gov.sg/v1/environment/relative-humidity
# TESTING
Provide proof that you have done testing on your project. You can provide step by step
instructions for the examiner to test the project. Use your user stories and their acceptance
criteria as a starting point. Do note that any unhandled exceptions, console errors etc will
be considered as failing the testing criteria.
* Test Cases:
1. Test that user can toggle Light/Dark Mode
a. From the page, click on the 'Toggle for Light/Dark Mode' checkbox
b. The page will togle between a black/white background with white/black fonts, legends and grid lines as reflected in the charts.
2. Test select box in the Payload Sensor Reading chart
a. The chart will be regenerated with the relevant dataset associated with the select box option
# DEPLOYMENT
Describe the process that you used to host your website on a hosting platform (such as Github
pages or Heroku). Provide the following details:
1. What is your hosting platform?
    * Github Pages
2. How is the database hosted?
    * No Database
3. What are the environment variables and what are they responsible for?
    * No environment variables
5. What are the dependencies that your project used?
    * No dependencies
7. What are the deployment steps for the project?
    * Hosted by Github Page, accesible via Link
You can provide deployment details in a separate document (PDF or another markdown file).
There is no need to be original for this section; if another website or document have the
steps, just link there and acknowledge the author in your credits,
# LIVE LINK
You should include a live link to your deployed web site.
* Link: https://rachelyulin.github.io/
