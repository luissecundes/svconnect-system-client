// animations.ts
import { trigger, transition, style, animate } from '@angular/animations';

export const flipIn = trigger('flipIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'rotateY(-90deg)' }),
    animate('300ms ease-out', style({ opacity: 1, transform: 'rotateY(0)' })),
  ]),
  transition(':leave', [
    animate(
      '200ms ease-in',
      style({ opacity: 0, transform: 'rotateY(90deg)' })
    ),
  ]),
]);
