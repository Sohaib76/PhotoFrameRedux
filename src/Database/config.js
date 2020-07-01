import * as firebase from 'firebase'



var firebaseConfig = {
    apiKey: "AIzaSyAiD2Cq4co1CqAAO-glFjkOpo6IuMFiw8A",
    authDomain: "photoframereactredux.firebaseapp.com",
    databaseURL: "https://photoframereactredux.firebaseio.com",
    projectId: "photoframereactredux",
    storageBucket: "photoframereactredux.appspot.com",
    messagingSenderId: "256592195116",
    appId: "1:256592195116:web:9dceb368cdd5c909e8eb89",
    measurementId: "G-PG0HGYM8H8"
  };

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()

