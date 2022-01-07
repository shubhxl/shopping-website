import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: process.env.React_App_API_Key,
    authDomain: process.env.React_App_Auth_Domain,
    projectId: process.env.React_App_Project_Id,
    storageBucket: process.env.React_App_Storage_Bucket,
    messagingSenderId: process.env.React_App_Message_Sender_Id,
    appId: process.env.React_App_App_Id
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;