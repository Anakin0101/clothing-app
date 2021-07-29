import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCvm-_7YYmXkg-3Y2zZ-Xb13x_IT_YQ4F0",
  authDomain: "clothing-app-f5d66.firebaseapp.com",
  projectId: "clothing-app-f5d66",
  storageBucket: "clothing-app-f5d66.appspot.com",
  messagingSenderId: "550636487599",
  appId: "1:550636487599:web:b0d54103cdf0088738e55a",
  measurementId: "G-1Y0X80YKKS",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userAuth, "1");
  const snapShot = await userRef.get();
  console.log(snapShot, "snap");

  if (!snapShot.exists) {
    console.log("exists");
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(displayName, "use");
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
