import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f',null) signUpForm:NgForm;

  answer:string;
  genders=['male','female'];

  user={
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  };
  submitted=false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({         //to fill all form, we use setValue.
    //   userData:{
    //     username:suggestedName,
    //     email:'user@gmail.com'
    //   },
    //   secret:'pet',
    //   QuestionAnswer:'Your answer here!',
    //   gender:'male'
    // });
    this.signUpForm.form.patchValue({     //to fill part of form, we use patchValue.
      userData:{
        username:suggestedName
      }
    })
  }
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(form: NgForm){
    this.submitted=true;
    this.user.username=this.signUpForm.value.userData.username;
    this.user.email=this.signUpForm.value.userData.email;
    this.user.secretQuestion=this.signUpForm.value.secret;
    this.user.answer=this.signUpForm.value.QuestionAnswer;
    this.user.gender=this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
