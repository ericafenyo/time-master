import { Component, Input } from "@angular/core";
import { Activity } from "packages/network/dist/services/activity";

@Component({
  selector: "activity",
  templateUrl: "./activity.component.html",
})
export class ActivityComponent {
  @Input() activity: Activity;
}
