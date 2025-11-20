import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { CustomText } from "../../../components/text/text";


import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CustomText, RouterLink],
  templateUrl: './movie-layout.html',
})
export class MovieLayout {
  private router = inject(Router);
  currentPath = '';

  titleText = '';
  subText = '';

  name: string = '';
  email: string = '';
  loading = true;

  constructor(
    private auth: Auth,
    private firestore: Firestore) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentPath = event.url;
        this.updateTexts();
      });

  }

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

      this.updateTexts();
    });
  }


  updateTexts() {
    if (this.currentPath.includes('/explore')) {
      this.titleText = `Welcome, ${this.name}!`;
      this.subText = "Here's what we've been watching…";
    } else if (this.currentPath.includes('/reviewed')) {
      this.titleText = 'Such a good taste!';
      this.subText = "Here's what you've reviewed so far...";
    } else if (this.currentPath.includes('/watch-list')) {
      this.titleText = 'Which movie are you watching today?';
      this.subText = "Here's what you added to your Watch List...";
    } else if (this.currentPath.includes('/profile')) {
      this.titleText = 'This is your profile';
      this.subText = "Here's what you can do...";
    } else if (this.currentPath.includes('/movie')) {
      this.titleText = 'About the movie';
      this.subText = "Here's what you need to know...";
    }
  }

  pages = ['Explore', 'Reviewed', 'Watch-List', 'Profile'];
}


