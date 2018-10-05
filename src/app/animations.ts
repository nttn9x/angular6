import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

// Component transition animations
export const routeFadeAnimation = trigger('routeFadeAnimation', [
  state(
    '*',
    style({
      opacity: 1
    })
  ),
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('0.225s ease-in')
  ]),
  transition(':leave', [
    animate(
      '0.225s ease-in',
      style({
        opacity: 0
      })
    )
  ])
]);
