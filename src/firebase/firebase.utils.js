import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDd_lxUo6AKMR70j3ACDgibS7RVvBqTK70",
    authDomain: "reedlycars.firebaseapp.com",
    databaseURL: "https://reedlycars.firebaseio.com",
    projectId: "reedlycars",
    storageBucket: "reedlycars.appspot.com",
    messagingSenderId: "764296972134",
    appId: "1:764296972134:web:c1d50fb13ee1d043e86aa7"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; // check if userAuth is set

    const userRef =  firestore.doc(`users/${userAuth.uid}`);
    const userSnapShot = await userRef.get();

    if(!userSnapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
        } catch (error) {
          console.log('error creating user', error);
        }

    }

     return userRef;
     
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;