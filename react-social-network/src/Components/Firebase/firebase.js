import app from 'firebase/app'; 
import 'firebase/auth'; 

  const config = {
    apiKey: "AIzaSyCuYDItPGA7-SAZjT4c9lpZfmj6ua1SABQ",
    authDomain: "linkup-react.firebaseapp.com",
    databaseURL: "https://linkup-react.firebaseio.com",
    projectId: "linkup-react",
    storageBucket: "linkup-react.appspot.com",
    messagingSenderId: "301011429933",
    appId: "1:301011429933:web:5c63336cd5d11411"
  };
class Firebase {
    constructor(){
        app.initializeApp(config);

        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
     this.auth.createUserWithEmailAndPassword(email.password);

    doSignInWithEmailAndPassword = (email, password) =>
     this.auth.signInWithEmailAndPassword(email,password); 

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
     this.auth.currentUser.updatePassword(password);
}

  export default Firebase; 
 
