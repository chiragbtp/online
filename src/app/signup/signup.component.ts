import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  pass = false;
  confirmpass = false;


  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['',],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['']
    });
  }

  ngOnInit(): void {
  }

  get formControls() { return this.signupForm.controls; }

  onSubmit() {
    var userdata = {
      'name': this.signupForm.get('firstname')?.value,
      'lastname': this.signupForm.get('lastname')?.value,
      'email': this.signupForm.get('email')?.value,
      'password': this.signupForm.get('password')?.value
    };

    const password = this.signupForm.get('password')?.value;
    const confirmpassword = this.signupForm.get('confirmpassword')?.value;

    console.log("userData", userdata);
    
    if (password != confirmpassword) {
      this.toastr.error("password and confirm passord did not match")
    }
    else {
      console.log('asdas', this.signupForm.value)
    }
  }
  toggleShow() {
    this.pass = !this.pass;
  }

  toggleconfirm() {
    this.confirmpass = !this.confirmpass;

  }
}
