import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  imports: [],
  templateUrl: './singup.html',
  styleUrl: './singup.css',
})
export class Singup {
  constructor(private router: Router) { }

  goToMovies() {
    this.router.navigate(['movies/explore'])
  }

  goToInitialPage() {
    this.router.navigate([''])
  }
}
