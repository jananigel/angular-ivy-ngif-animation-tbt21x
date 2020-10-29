import { animate, style, transition } from "@angular/animations";

export const OPACITY_FADE_IN_OUT = [
  transition(":enter", [
    style({ opacity: 0 }),
    animate(".3s ease-out", style({ opacity: 1 }))
  ]),
  transition(":leave", [
    style({ opacity: 1 }),
    animate(".3s ease-in", style({ opacity: 0 }))
  ])
];
