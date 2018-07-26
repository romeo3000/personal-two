import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConFig = {
    
apiKey: "AIzaSyBGyqNCzkiuJgxm8StEh84QDSBQXR-mQcs",
    authDomain: "ieventz-f0dd6.firebaseapp.com",
    databaseURL: "https://ieventz-f0dd6.firebaseio.com",
    projectId: "ieventz-f0dd6",
    storageBucket: "",
    messagingSenderId: "256584043513"
}

firebase.initializeApp(firebaseConFig);


const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

export default firebase;