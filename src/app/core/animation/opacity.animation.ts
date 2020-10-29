import { animate, style, transition } from "@angular/animations";

export const SEQUENCE_FADE_IN_OUT = [
  transition(":leave", [
    style({ opacity: 0 }),
    animate(".3s ease-out", style({ opacity: 1 }))
  ]),
  transition(":enter", [
    style({ opacity: 1 }),
    animate(".3s ease-in", style({ opacity: 0 }))
  ])
];
