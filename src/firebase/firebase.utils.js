import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDHM5Iv673UwH5TcVYWcmDcnfhOtiveSwU",
    authDomain: "crwn-react-app.firebaseapp.com",
    projectId: "crwn-react-app",
    storageBucket: "crwn-react-app.appspot.com",
    messagingSenderId: "34841257567",
    appId: "1:34841257567:web:314d64f8526acdd9fb1dea"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;