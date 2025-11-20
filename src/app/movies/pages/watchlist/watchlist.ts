import { Component, OnInit } from '@angular/core';
import { WatchlistService, WatchlistItem } from '../../services/watchlist.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watchlist',
  imports: [CommonModule],
  templateUrl: './watchlist.html',
})
export class Watchlist implements OnInit {
  movies: WatchlistItem[] = [];
  loading = true;
  userId: string | null = null;

  constructor(
    private watchlistService: WatchlistService,
    private authService: AuthService,
    private router: Router
  ) { }

  async ngOnInit() {
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.loading = false;
      return;
    }
    this.userId = user.uid;

    try {
      this.movies = await this.watchlistService.getWatchlist(user.uid);
    } catch (err) {
      console.error('Failed to fetch watchlist', err);
    } finally {
      this.loading = false;
    }
  }

  goToMovie(movieId: string) {
    this.router.navigate([`/movies/${movieId}`]);
  }
}
