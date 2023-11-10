import { Component } from "@angular/core";
import { Activity, activityService } from "@time-master/network";

@Component({
  selector: "Activities",
  templateUrl: "./activities.component.html",
})
export class ActivitiesComponent {
  activities: Activity[] = [];

  async ngOnInit() {
    const ac = await activityService.getActivities();
    this.activities = ac;
    console.log(ac);
  }
}
