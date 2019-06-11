import app from 'firebase/app'; 

const config = {
    apiKey: "AIzaSyCuYDItPGA7-SAZjT4c9lpZfmj6ua1SABQ",
    authDomain: "linkup-react.firebaseapp.com",
    databaseURL: "https://linkup-react.firebaseio.com",
    projectId: "linkup-react",
    storageBucket: "linkup-react.appspot.com",
    messagingSenderId: "301011429933",
    appId: "1:301011429933:web:d38778a3268520ef"
  };
  
  class Firebase {
      constructor () {
        app.initializeApp (config); 
      }
  }
  
  export default Firebase; 
  