import { Component, VERSION } from "@angular/core";
import { trigger } from "@angular/animations";
import { MOCK_DATA } from "./core/mock-data/mock-list-data";
import { List } from "./core/interface/list.interface";
import { SEQUENCE_FADE_IN_OUT } from "./core/animation/sequence-fade-in-out.animation";
import { OPACITY_FADE_IN_OUT } from "./core/animation/opacity.animation";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("inOutAnimation", SEQUENCE_FADE_IN_OUT),
    trigger("opacityAnimation", OPACITY_FADE_IN_OUT)
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
