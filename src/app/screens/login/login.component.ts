import { Component } from "@angular/core";

@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  email = "";
  password = "";

  submit = (event: any)=> {

    console.log(event.target);
    
  }
}
