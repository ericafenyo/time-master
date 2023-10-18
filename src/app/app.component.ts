import { Component } from "@angular/core";
import {activityService  } from "@time-master/network";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "time-master";

  greet() {
    console.log(activityService.getActivity(""));
  }
}
