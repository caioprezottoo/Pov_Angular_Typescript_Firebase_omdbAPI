import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TEXT_VARIANTS } from '../text/text-variants';
import { BUTTON_VARIANTS } from './button-variants';

@Component({
  selector: 'CustomButton',
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class CustomButton {
  @Input() textVariant: string = 'm-text-sm';
  @Input() variant: string = 'primary';
  @Input() extraClasses: string = '';

  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }

  get combinedClasses(): string[] {
    return [
      TEXT_VARIANTS[this.textVariant] || '',
      BUTTON_VARIANTS[this.variant] || '',
      this.extraClasses
    ];
  }

}