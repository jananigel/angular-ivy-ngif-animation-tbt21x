import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  VERSION,
  ViewChild
} from "@angular/core";
import { trigger } from "@angular/animations";
import { MOCK_DATA } from "./core/mock-data/mock-list-data";
import { List } from "./core/interface/list.interface";
import { SEQUENCE_FADE_IN_OUT } from "./core/animation/sequence-fade-in-out.animation";
import { OPACITY_FADE_IN_OUT } from "./core/animation/opacity.animation";

enum CollapseMode {
  Collapse = "collapse",
  Swap = "swap"
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("inOutAnimation", SEQUENCE_FADE_IN_OUT),
    trigger("opacityAnimation", OPACITY_FADE_IN_OUT)
  ]
})
export class AppComponent implements AfterViewInit {
  // name = 'Angular ' + VERSION.major;
  isShowList = true;
  buttonName = "Hide List";
  data = JSON.parse(JSON.stringify(MOCK_DATA));
  isDisabledAnimation = false;
  mode = CollapseMode;

  @Input() collapseMode: CollapseMode = CollapseMode.Swap;

  @ViewChild("listEle") listElement: ElementRef;

  ngAfterViewInit() {}

  onBtnClick = () => {
    this.isShowList = !this.isShowList;
    this.buttonName = this.isShowList ? "Hide List" : "Show List";
  };

  onListClick = async (event: Event, list: List) => {
    event.stopPropagation();
    if (list.children && list.children.length) {
      // next page
      await this.disabledAnimation();
      await this.changeList(list);
      await this.enabledAnimation();
      return;
    }

    console.log(`list ${list.name} had been clicked`);
  };

  onDelete = (event: Event, id: string) => {
    console.log("delete click");
    event.stopPropagation();
    this.data = this.data.filter(data => data.id !== id);
  };

  onRestoreClick = async () => {
    await this.disabledAnimation();
    await this.changeList(MOCK_DATA);
    await this.enabledAnimation();
  };

  trackById = (index: number, item: List): string => {
    return item.id;
  };

  private disabledAnimation = () => {
    return new Promise(resovle => {
      this.isDisabledAnimation = true;
      resovle();
    });
  };

  private changeList = (data: List | List[]) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const listData = "children" in data ? data.children : data;
        this.data = JSON.parse(JSON.stringify(listData));
        resolve();
      });
    });
  };

  private enabledAnimation = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.isDisabledAnimation = false;
        resolve();
      });
    });
  };
}
