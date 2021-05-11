import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/layout/home/home.component';
import { LoginComponent } from '../views/pages/login/login.component';
import { SignupComponent } from '../views/pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadChildren: 'src/app/views/pages/login/login.module#LoginModule',
    
},
{
  path:'signup', 
  loadChildren: 'src/app/views/pages/signup/signup.module#SignupModule',

},

{
  path:'home',
  loadChildren: 'src/app/views/layout/home/home.module#HomeModule',
  component: HomeComponent,
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
