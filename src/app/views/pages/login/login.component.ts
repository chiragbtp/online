import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    pass = false;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginservice: LoginService,
    private router: Router
    ) {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
  ngOnInit(): void {
  }
  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    var userdata = {
      'email': this.loginForm.get('email')?.value,
      'password': this.loginForm.get('password')?.value
    };
    this.loginservice.signIn(userdata).subscribe((res)=>{
      this.toastr.success(res.message);
      this.loginForm.reset();
      this.router.navigate(['/home']);
    },error =>     
    this.toastr.error(error.error.error)
    )

  }
  toggleShow() {
    this.pass = !this.pass;
  }

}
