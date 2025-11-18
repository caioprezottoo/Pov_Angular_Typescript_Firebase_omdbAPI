import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANuRFP7MTp_3i1I8UJMLanFLFKmixDgAw",
    authDomain: "point-of-view-f0117.firebaseapp.com",
    projectId: "point-of-view-f0117",
    storageBucket: "point-of-view-f0117.firebasestorage.app",
    messagingSenderId: "796523963207",
    appId: "1:796523963207:web:fa2b33eb9427881deb6262"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;