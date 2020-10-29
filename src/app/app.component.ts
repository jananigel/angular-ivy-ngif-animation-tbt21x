import { Component, VERSION } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence
} from "@angular/animations";
import { MOCK_DATA } from "./core/mock-data/mock-list-data";
import { List } from "./core/interface/list.interface";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("inOutAnimation", [
      transition(":leave", [
        // style({ opacity: 0 }),
        // animate(".3s ease-out", style({ opacity: 1 }))
        style({
          height: "*",
          opacity: "1",
          transform: "translateX(0)",
          "box-shadow": "0 1px 4px 0 rgba(0, 0, 0, 0.3)"
        }),
        sequence([
          animate(
            ".25s ease",
            style({
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
        // style({ opacity: 1 }),
        // animate(".3s ease-in", style({ opacity: 0 }))
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
    ])
  ]
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;
  isShowList = true;
  buttonName = "Show List";
  data = JSON.parse(JSON.stringify(MOCK_DATA));

  onBtnClick = () => {
    this.isShowList = !this.isShowList;
    this.buttonName = this.isShowList ? "Hide List" : "Show List";
  };

  onListClick = (list: List) => {
    if (list.children && list.children.length) {
      // next page
      console.log("next page");
      return;
    }

    console.log(`list ${list.name} had been clicked`);
  };

  onDelete = (id: string) => {
    this.data = this.data.filter(data => data.id !== id);
  };

  onRestoreClick = () => {
    this.data = JSON.parse(JSON.stringify(MOCK_DATA));
  };

  trackById = (index: number, item: List): string => {
    return item.id;
  };
}
