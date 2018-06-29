# Project Title

Simple React Redux app

## Description

A simple app that uses React, Redux and React-router to create an login page. Please use the following credentials: -  
`username: macintosh@xyz.com`  
`password: mojave`on the login page. On a successful login it should take you to the home page.

## Getting Started

### Dependencies

* [NodeJS](https://nodejs.org/en/download/)

### Instructions to run the App

* clone the repository
* cd into react-simple-login folder
* run `npm install`
* run `npm start`
* open http://localhost:8080/

Please use the following credentials: -  
`username: macintosh@xyz.com`  
`password: mojave`

## Design Decisions

* The login page is very simple. It contains a form component that matches the username and password.
* The verification method does not let submit an empty form nor does it work for other credentials.
* Warns the user if the above conditions are not met by changing the color of the input box.
* Can add a Remember me and forgot password option to the page. Currently it is seemed out of scope for this project.
* React-router is used to handle page transition.
* Home page is pretty clean and responsive.
* The cards stack when the browser width is changed.
* There is a time clock component built with momentJS.
* I created a container (smart component) for TodoList to handle the redux and data store to showcase how the redux interaction is handled.
* Setup simple redux flow with reducers, store and action.
*  Lastly added a favicon. Works on Chrome but I hear Safari is coming with an update in Mojave for the same. Yayyy !! Excited 😀 !!!


## Author

Pranshu Kumar   
[@pk_pranshu](https://twitter.com/pk_pranshu)
