import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) { }

  goToMovies() {
    this.router.navigate(['movies/explore'])
  }

  goToInitialPage() {
    this.router.navigate([''])
  }
}
