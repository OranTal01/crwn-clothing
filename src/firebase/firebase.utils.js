import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjfu5p2b689jCaN4tVdyAENoay-unPzu8",
    authDomain: "crwn-clothing-d36df.firebaseapp.com",
    databaseURL: "https://crwn-clothing-d36df.firebaseio.com",
    projectId: "crwn-clothing-d36df",
    storageBucket: "crwn-clothing-d36df.appspot.com",
    messagingSenderId: "99501931144",
    appId: "1:99501931144:web:aaaa4c4af2c400ed6e7d3d",
    measurementId: "G-WKPY673L5H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = fireStore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {

        const { email, displayName } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            throw new Error('error creating user', error.message);
        }
    }
    return userRef;

};

export default firebase;