import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: true})signupform: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  username: String;
  emailaddress: String;
  gender: String;
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupform.form.patchValue({userData: {username: suggestedName}});
  }

  // onSubmit(form: NgForm) {
  //  console.log(form.value.username);
  // }

  onSubmit() {
    this.username = this.signupform.form.value.userData['username'];
    this.emailaddress = this.signupform.form.value.userData['email']
    this.gender = this.signupform.form.value.gender;
    this.answer = this.signupform.form.value.questionAnswer;
    this.submitted = true;
    this.signupform.reset();
  }
}
