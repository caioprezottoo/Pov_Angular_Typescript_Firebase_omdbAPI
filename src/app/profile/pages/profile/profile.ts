import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut, deleteUser, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, doc, deleteDoc, getDoc } from '@angular/fire/firestore';
import { CustomText } from "../../../components/text/text";
import { CustomButton } from '../../../components/button/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CustomText, CustomButton],
  templateUrl: './profile.html',
})
export class Profile {
  name: string = '';
  email: string = '';
  loading = true;

  constructor(
    private router: Router,
    private auth: Auth,
    private firestore: Firestore
  ) { }

  ngOnInit() {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        this.email = user.email ?? '';
        const docRef = doc(this.firestore, `Users/${user.uid}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.name = docSnap.data()['name'] ?? '';
        }
      }
      this.loading = false; 
    });
  }

  goToInitialPage() {
    this.router.navigate(['']);
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['']);
    } catch (error) {
      console.error("Logout error:", error);
      alert("Error logging out");
    }
  }

  async deleteAccount() {
    const user = this.auth.currentUser;

    if (!user) {
      alert("No user is logged in.");
      return;
    }

    const confirmed = confirm(
      "Are you sure you want to delete your account?\nThis action cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    try {
      const userDocRef = doc(this.firestore, `Users/${user.uid}`);

      await deleteDoc(userDocRef);

      await deleteUser(user);

      alert("Your account has been deleted.");
      this.router.navigate(['']);
    } catch (error: any) {
      console.error("Delete account error:", error);

      if (error.code === 'auth/requires-recent-login') {
        alert("You must log in again to delete your account.");
      } else {
        alert("Error deleting account.");
      }
    }
  }
}
