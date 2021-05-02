import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  open = true;
  sidebarOpen = true;
  alluser:any;

  constructor(private loginservice: LoginService,private toastr: ToastrService,
    private router: Router


    ) { }

  ngOnInit(): void {
    this.getAlluser();
  }


  dropdownOpen(){
    this.open = !this.open;
  }

  opensidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }
  logout(){
    this.loginservice.signOut().subscribe((res)=>{
      this.toastr.success(res.message);
      this.router.navigate(['/login']);
    },error =>     
    this.toastr.error(error.error.error)
    );
  }

  getAlluser(){
    debugger
    this.loginservice.getAllUser().subscribe((res)=>{
      this.alluser =res.data
      console.log(this.alluser)
    },error =>     
    this.toastr.error(error.error.error)
    );
  }
}
