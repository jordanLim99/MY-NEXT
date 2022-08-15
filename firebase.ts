import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAid-b82atN_VWdWc4hccaV24T7pxnHsBQ",
    authDomain: "my-next-project-fc255.firebaseapp.com",
    databaseURL: "https://my-next-project-fc255-default-rtdb.firebaseio.com",
    projectId: "my-next-project-fc255",
    storageBucket: "my-next-project-fc255.appspot.com",
    messagingSenderId: "929839618330",
    appId: "1:929839618330:web:096af405d76754c2e174a3",
    measurementId: "G-QH43FG65DS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db , auth , provider};
