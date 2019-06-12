import app from 'firebase/app';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBWEuHMKTKqSkSASuS_-PTTNS6X94mdTSc",
  authDomain: "geekreact-4fa91.firebaseapp.com",
  databaseURL: "https://geekreact-4fa91.firebaseio.com",
  projectId: "geekreact-4fa91",
  storageBucket: "geekreact-4fa91.appspot.com",
  messagingSenderId: "1013336248010",
  appId: "1:1013336248010:web:fcb54789619d5b13"
};




class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
  }


  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)


    doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password)
}

export default Firebase