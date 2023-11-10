import { Component, Input } from "@angular/core";

@Component({
  selector: "[sidebar-item]",
  templateUrl: "./sidebar-item.component.html",
  styleUrls: ["./sidebar-items.component.css"]
})
export class SidebarItemComponent {
  @Input() name: string;
}
