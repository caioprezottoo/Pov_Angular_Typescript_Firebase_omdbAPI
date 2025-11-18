import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEXT_VARIANTS } from './text-variants';

@Component({
  selector: 'Text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.html',
})
export class Text {
  @Input() variant: string = 'm-text-xs';

  get classes(): string {
    return TEXT_VARIANTS[this.variant] || '';
  }
}