import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  open = true;
  sidebar = true;
  body: any
  constructor(private loginservice: LoginService,private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
     this.body = document.getElementsByTagName('body')[0];
  }

  dropdownOpen(){
    this.open = !this.open;
  }
  logout(){
    this.loginservice.signOut().subscribe((res)=>{
      this.toastr.success(res.message);
      this.router.navigate(['/login']);
    },error =>     
    this.toastr.error(error.error.error)
    );
  }

  leftMenuOpen(){
    this.sidebar =false
    this.body.classList.add('seo_version');
  }
  leftMenuClose(){
    this.sidebar =true
    this.body.classList.remove('seo_version');
  }
}
