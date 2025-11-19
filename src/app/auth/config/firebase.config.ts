// firebase.config.ts
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAHHfkDQnZBpIqg6JSxsbKaU2FJGmP351k",
    authDomain: "point-of-view-angular.firebaseapp.com",
    projectId: "point-of-view-angular",
    storageBucket: "point-of-view-angular.firebasestorage.app",
    messagingSenderId: "388696729152",
    appId: "1:388696729152:web:c3dbd66855a89345dce1a5"
};

export const firebaseApp = initializeApp(firebaseConfig);
