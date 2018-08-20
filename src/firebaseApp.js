
  import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyAbVYE06TGO2TWuKFZXtCL62wCV127P0tk",
    authDomain: "turnout-3c425.firebaseapp.com",
    databaseURL: "https://turnout-3c425.firebaseio.com",
    projectId: "turnout-3c425",
    storageBucket: "turnout-3c425.appspot.com",
    messagingSenderId: "681730727547"
  };

  export const firebaseApp = firebase.initializeApp(config)
  export const eventsRef = firebaseApp.database().ref().child('events')
