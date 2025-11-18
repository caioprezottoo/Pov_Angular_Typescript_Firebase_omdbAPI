import { Component, Input } from '@angular/core';
import { TEXT_VARIANTS } from '../text/text-variants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Button',
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class Button {
  @Input() textVariant: string = 'm-text-sm';
  @Input() variant: string = 'primary';

  variantClasses: { [key: string]: string } = {
    "primary": "bg-gray-100 text-gray-400 w-[17.375rem] h-12 shadow-xl",
    "secondary": "bg-gray-100 bg-opacity-10 border border-gray-100 w-[17.375rem] h-12 shadow-xl",
    "tertiary": "bg-gray-100 w-16 h-10"
  };

  get combinedClasses(): string[] {
    return [TEXT_VARIANTS[this.textVariant] || '', this.variantClasses[this.variant] || ''];
  }

}
