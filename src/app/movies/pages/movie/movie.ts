import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { getMovieById, Movie } from '../../services/omdbAPI.service';
import { ReviewService } from '../../services/review.service';
import { WatchlistService } from '../../services/watchlist.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ReviewModal } from '../../../components/review-modal/review-modal';
import { CustomText } from '../../../components/text/text';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomText, ReviewModal],
  templateUrl: './movie.html',
})
export class MoviePage implements OnInit {
  movie: Movie | null = null;
  loading = true;
  error = '';
  isReviewModalOpen = false;
  existingReview: { rating: number; review: string; reviewId?: string } | null = null;
  userId: string | null = null;
  inWatchlist = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reviewService: ReviewService,
    private watchlistService: WatchlistService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = this.authService.getCurrentUser()?.uid ?? null;

    if (!id) {
      this.error = 'Movie not found.';
      this.loading = false;
      return;
    }

    try {
      const data = await getMovieById(id);
      this.movie = data;

      if (this.userId) {
        const rev = await this.reviewService.getMovieReview(this.userId, id);
        if (rev) {
          this.existingReview = {
            rating: rev.rating,
            review: rev.review,
            reviewId: rev.id
          };
        }

        const watchlist = await this.watchlistService.getWatchlist(this.userId);
        this.inWatchlist = watchlist.some(item => item.movieId === id);
      }
    } catch (err) {
      console.error(err);
      this.error = 'Failed to load movie.';
    }

    this.loading = false;
  }

  goBack() {
    this.router.navigate(['/movies/explore']);
  }

  openReviewModal() {
    if (!this.userId) {
      alert('You must be logged in to write a review');
      return;
    }
    this.isReviewModalOpen = true;
  }

  async onReviewSubmit(payload: { rating: number; review: string }) {
    if (!this.userId || !this.movie) return;

    try {
      if (this.existingReview?.reviewId) {
        await this.reviewService.updateReview(
          this.existingReview.reviewId,
          payload.rating,
          payload.review
        );
        this.existingReview = { ...this.existingReview, rating: payload.rating, review: payload.review };
      } else {
        const id = await this.reviewService.addReview({
          userId: this.userId,
          movieId: this.route.snapshot.paramMap.get('id')!,
          movieTitle: this.movie.Title,
          moviePoster: this.movie.Poster,
          rating: payload.rating,
          review: payload.review
        });
        this.existingReview = { rating: payload.rating, review: payload.review, reviewId: id };
      }
    } catch (err) {
      console.error(err);
      alert('Failed to save review');
    }
  }

  closeModal() {
    this.isReviewModalOpen = false;
  }

  async toggleWatchlist() {
    if (!this.userId || !this.movie) return;

    if (this.inWatchlist) {
      await this.watchlistService.removeFromWatchlist(this.userId, this.movie.imdbID);
      this.inWatchlist = false;
    } else {
      await this.watchlistService.addToWatchlist(this.userId, {
        movieId: this.movie.imdbID,
        title: this.movie.Title,
        poster: this.movie.Poster
      });
      this.inWatchlist = true;
    }
  }
}
