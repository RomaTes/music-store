import { trigger, transition, style, animate } from '@angular/animations';

export const slideInOut = 
  trigger('slideInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1000ms ease-in', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('1000ms ease-in', style({ opacity: 0 }))
    ])
  ]);