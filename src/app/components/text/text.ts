import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEXT_VARIANTS } from './text-variants';

@Component({
  selector: 'CustomText',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.html',
})
export class CustomText {
  @Input() variant: string = 'm-text-xs';
  @Input() extraClasses: string = ''

  get combinedClasses(): string[] {
      return [
        TEXT_VARIANTS[this.variant] || '',
        this.extraClasses
      ];
    }
}