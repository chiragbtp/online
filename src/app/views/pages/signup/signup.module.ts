import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup.routing.module';
import { SignupService } from 'src/app/services/signup.service';


@NgModule({
    imports: [
        CommonModule,
        SignupRoutingModule,
        ToastrModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SignupComponent,
       
    ],
    providers: [SignupService]
})
export class SignupModule { }
