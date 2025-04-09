import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCurrencyMask]',
  standalone: true,
})
export class CurrencyMaskDirective {
  private maxDigits: number = 15;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    let value = this.el.nativeElement.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/^0+/, '');

    if (value.length > this.maxDigits) {
      value = value.slice(0, this.maxDigits);
    }

    const formatted = (Number(value) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    this.el.nativeElement.value = formatted;
  }

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent) {
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, '').replace(/^0+/, '');

    if (value.length > this.maxDigits) {
      value = value.slice(0, this.maxDigits);
    }

    input.value = (Number(value) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
