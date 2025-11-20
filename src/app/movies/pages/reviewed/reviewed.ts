import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewService, Review } from '../../services/review.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { CustomText } from '../../../components/text/text';

@Component({
  selector: 'app-reviewed',
  standalone: true,
  imports: [CommonModule, CustomText],
  templateUrl: './reviewed.html'
})
export class Reviewed implements OnInit {
  reviews: Review[] = [];
  loading = true;
  userId: string | null = null;

  constructor(private reviewService: ReviewService, private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    this.userId = this.authService.getCurrentUser()?.uid ?? null;
    if (!this.userId) {
      this.loading = false;
      return;
    }

    try {
      this.reviews = await this.reviewService.getUserReviews(this.userId);
    } catch (err) {
      console.error('Failed to fetch reviews', err);
    } finally {
      this.loading = false;
    }
  }

  goToMovie(movieId: string) {
    this.router.navigate(['/movies', movieId]);
  }

  async deleteReview(reviewId?: string) {
    if (!reviewId) return;
    const ok = confirm('Delete this review?');
    if (!ok) return;
    try {
      await this.reviewService.deleteReview(reviewId);
      this.reviews = this.reviews.filter(r => r.id !== reviewId);
    } catch (err) {
      console.error('Failed to delete review', err);
      alert('Failed to delete review');
    }
  }
}
