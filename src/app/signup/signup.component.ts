import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../services/signup.service';


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
    private toastr: ToastrService,
    private signupService: SignupService,
    private router: Router
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
    this.signupService.signUp(userdata).subscribe((res)=>{
      const password = this.signupForm.get('password')?.value;
      const confirmpassword = this.signupForm.get('confirmpassword')?.value;

      if (password != confirmpassword) {
        this.toastr.error("password and confirm password did not match")
      }

      if(!res.error){ 
      this.toastr.success(res.message);
      this.signupForm.reset();
      this.router.navigate(['/login']);
    }
    },error =>     
    this.toastr.error(error.error.error)
    );

  }
  
  toggleShow() {
    this.pass = !this.pass;
  }

  toggleconfirm() {
    this.confirmpass = !this.confirmpass;

  }
}
