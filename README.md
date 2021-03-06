# JavaScript Prework for AllWomen Bootcamp

The original prework instruction is to recreate the [Dog App](https://frontendmasters.github.io/bootcamp/dog-viewer/dog.html) created by Brian Holt from Frontend Masters.

Having watched a step by step tutorial and replicating the code, I did not find the process to be very educational. <br>

Even though building it entirely frontend with DOM access was the most straightforward, in order to get more practice from writing server code, I attempted to recreate the Dog App using Express & EJS.

## The App

A random dog image is rendered upon access to root, and then a specific dog image is fetched when the breed is selected from the dropdown menu and submitted.

It is deployed on Heroku: [Server Dog App](https://glacial-lowlands-19605.herokuapp.com/)

![alt text](https://i.postimg.cc/pX4TtGNx/Screen-Shot-2021-09-07-at-12-08-54-AM.png "Dog App demo page")

Express was used to create the routes, EJS was used to render the HTML, and the static stylesheet was served up in the public folder.<br>

Two modules, HTTPS (native module) and Axios were used to make the HTTP request in NodeJS because I wanted practice on using different modules.

## Blocker
Render a spinner while the API retrieves data during POST request without DOM
