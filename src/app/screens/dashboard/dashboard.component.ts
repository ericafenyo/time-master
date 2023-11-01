import { Component } from "@angular/core";
import { activityService } from "@time-master/network";
import { Activity } from "packages/network/dist/services/activity";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
})

export class DashboardComponent {
  activities: Activity[] = [];

  async ngOnInit() {
    const ac = await activityService.getActivities();
    this.activities = ac;
    console.log(ac);
  }
}
