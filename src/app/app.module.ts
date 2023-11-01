import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./screens/login/login.component";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from "./screens/dashboard/dashboard.component";
import { ActivityComponent } from "./components/activity/activity.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, ActivityComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
