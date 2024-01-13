import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { HomeUserComponent } from './FrontOffice/home-user/home-user.component';
import { SignINUserComponent } from './FrontOffice/sign-in-user/sign-in-user.component';
import { SignUPUserComponent } from './FrontOffice/sign-up-user/sign-up-user.component';
import { ClientHomeComponent } from './FrontOffice/client-home/client-home.component';
import { ManagerHomeComponent } from './FrontOffice/manager-home/manager-home.component';

const routes: Routes = [
{
  path:'user',
  component: AllTemplateUserComponent,
  children:[
    {path:'',component:HomeUserComponent},
    {path:'register',component:SignUPUserComponent},
    {path:'authenticate',component:SignINUserComponent},
    {path:'client/:',component:ClientHomeComponent},
    {path:'manager/:',component:ManagerHomeComponent}



    
  ]
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
