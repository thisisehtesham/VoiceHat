# VoiceHat
[![Language](https://img.shields.io/badge/Language-Javascript-blue.svg?style=flat)](https://www.javascript.com/)
[![Framework](https://img.shields.io/badge/Framework-Reactjs-brightgreen.svg?style=flat)](https://reactjs.org/)
# About
<p>
  Developed a social networking web app using React.js, Redux for the front end and Firebase for the backend. 
It uses firebase email and password authentication to give the user registration and
sign in capabilities and also retrieves the posts from firestore database.
Currently it consists only limited features and
functionalities when compared to the original LinkedIn website.
</p>
# Tech Stack
- React Js
- HTML
- CSS
- Redux
- Material UI
- Firebase Backend service
- Real-time database
# Features and Fuctionality
- Login using Google (Firebase Authentication) 
- Create a new post
- Realtime update posts
- Auto authenticate user on refresh
- Sign Out
## Environmental Setup
- This project was developed in VS Code.
#### How to setup in local environment to use this project
- Download and install a code/ text editor.
  - Recommended -
    - [Download VS Code](https://code.visualstudio.com/download)
    - [Download Atom](https://atom.io/)
- Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (npm gets installed by default on downloading Node)
- Clone the repository by running the command:
```
git clone https://github.com/thisisehtesham/Keeper-App.git
```
in your GitBash or terminal of VS Code.
- Run the command `cd Keeper-App`
- Run `npm install` to install all dependencies for the project.
#### Setup Firebase
- Create Firebase account
- Create a new project
- Create a web app for that
- Copy your config from there
  - Select config option -
  - Paste those config inside firebase/config.js file -
- Setup authentication using Google
- Tweak code as you like
- Run `npm start` to start the project on localhost:3000.
- Now you are set to use this project locally.
