import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie-layout',
  imports: [RouterOutlet],
  templateUrl: './movie-layout.html',
  styleUrl: './movie-layout.css',
})
export class MovieLayout {

  constructor(private router: Router) { }

  goToExplore() {
    this.router.navigate(['/movies', 'explore'])
  }
  goToProfile() {
    this.router.navigate(['/movies', 'profile'])
  }
  goToWatchList() {
    this.router.navigate(['/movies', 'watchlist'])

  }
  goToReviewed() {
    this.router.navigate(['/movies', 'reviewed'])

  }

}
