import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('f', {static: true}) form: NgForm;

  emailaddress: String;
  subscriptionPlan: String;
  yourPassword: String;
  submitted = false;

  onSubmit(form: NgForm) {
    this.emailaddress = form.form.value.email;
    this.subscriptionPlan = form.form.value.subscription;
    this.yourPassword = form.form.value.password;
    this.submitted = true;
    console.log(form.value);
    form.reset();
  }
}


