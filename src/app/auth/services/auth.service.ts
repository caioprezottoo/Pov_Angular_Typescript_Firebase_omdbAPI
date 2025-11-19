import { Injectable } from '@angular/core';
import {
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User
} from '@angular/fire/auth';

import {
    Firestore,
    doc,
    setDoc,
    getDoc
} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private auth: Auth,
        private firestore: Firestore
    ) { }

    async signup(name: string, email: string, password: string) {
        const credentials = await createUserWithEmailAndPassword(
            this.auth,
            email,
            password
        );

        const user = credentials.user;

        const userDocRef = doc(this.firestore, 'Users', user.uid);

        await setDoc(userDocRef, {
            name: name,
            email: email,
            createdAt: new Date()
        });

        return user;
    }

    async login(email: string, password: string): Promise<User> {
        const credentials = await signInWithEmailAndPassword(
            this.auth,
            email,
            password
        );

        return credentials.user;
    }

    logout() {
        return signOut(this.auth);
    }
    getCurrentUser(): User | null {
        return this.auth.currentUser;
    }

    async getUserData(uid: string) {
        const docRef = doc(this.firestore, 'Users', uid);
        const snapshot = await getDoc(docRef);

        return snapshot.exists() ? snapshot.data() : null;
    }
}