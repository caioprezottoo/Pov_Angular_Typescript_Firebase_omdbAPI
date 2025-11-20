import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomButton } from '../button/button';
import { CustomText } from '../text/text';

@Component({
  selector: 'app-review-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomButton, CustomText],
  templateUrl: './review-modal.html'
})
export class ReviewModal {
  @Input() isOpen = false;
  @Input() movieTitle = '';
  @Input() existingRating = 0;
  @Input() existingReview = '';
  @Input() isEditing = false;

  @Output() submitEvent = new EventEmitter<{ rating: number; review: string }>();
  @Output() closeEvent = new EventEmitter<void>();

  rating = 0;
  review = '';
  hovered = 0;
  stars = Array.from({ length: 10 }, (_, i) => i + 1);

  ngOnChanges() {
    this.rating = this.existingRating;
    this.review = this.existingReview;
  }

  setRating(n: number) {
    this.rating = n;
  }

  submit() {
    if (!this.rating) return;

    this.submitEvent.emit({
      rating: this.rating,
      review: this.review.trim()
    });

    this.closeEvent.emit();
  }

  close() {
    this.closeEvent.emit();
  }
}
