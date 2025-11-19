import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const firebaseProviders = [
    provideFirebaseApp(() =>
        initializeApp({
            apiKey: "AIzaSyAHHfkDQnZBpIqg6JSxsbKaU2FJGmP351k",
            authDomain: "point-of-view-angular.firebaseapp.com",
            projectId: "point-of-view-angular",
            storageBucket: "point-of-view-angular.firebasestorage.app",
            messagingSenderId: "388696729152",
            appId: "1:388696729152:web:c3dbd66855a89345dce1a5"
        })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
];
