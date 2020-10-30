import { animate, sequence, style, transition } from "@angular/animations";

export const SEQUENCE_FADE_IN_OUT = [
  transition(":leave", [
    style({
      height: "*",
      opacity: "1",
      transform: "translateX(0)",
      "box-shadow": "0 1px 4px 0 rgba(0, 0, 0, 0.3)"
      // background: 'red',
      // overflow: 'hidden'
    }),
    sequence([
      animate(
        ".25s ease",
        style({
          // height: '0',
          height: "*",
          opacity: ".2",
          transform: "translateX(20px)",
          "box-shadow": "none"
        })
      ),
      animate(
        ".1s ease",
        style({
          height: "0",
          opacity: 0,
          transform: "translateX(20px)",
          "box-shadow": "none"
        })
      )
    ])
  ]),
  transition(":enter", [
    style({
      height: "0",
      opacity: "0",
      transform: "translateX(20px)",
      "box-shadow": "none"
    }),
    sequence([
      animate(
        ".1s ease",
        style({
          height: "*",
          opacity: ".2",
          transform: "translateX(20px)",
          "box-shadow": "none"
        })
      ),
      animate(
        ".35s ease",
        style({
          height: "*",
          opacity: 1,
          transform: "translateX(0)",
          "box-shadow": "0 1px 4px 0 rgba(0, 0, 0, 0.3)"
        })
      )
    ])
  ])
];
