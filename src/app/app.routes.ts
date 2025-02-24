import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { MaleDesignsComponent } from './sections/men-designs/male-designs.component';
import { WomenDesignsComponent } from './sections/women-designs/women-designs.component';
import { ChildrenDesignsComponent } from './sections/children-designs/children-designs.component';
import { StatusComponent } from './components/status/status.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';




export const routes: Routes = [
  {
    path:'', 
    component:HomeComponent
  },
  {
    path:'about', 
    component: AboutComponent
  },
  {
    path: 'gallery', 
    component: GalleryComponent
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
  },
  {
    path: 'sign-up', 
    component: SignUpComponent, 
   
  },
  {
    path: 'login', component: LoginComponent, 
     
  },
  {
    path: 'men-designs', 
    component: MaleDesignsComponent, 
    
  },
  {
    path: 'women-designs', 
    component: WomenDesignsComponent, 
   
  },
  {
    path: 'children-designs', 
    component: ChildrenDesignsComponent, 
    
  },
  {
    path: 'contact-us', 
    component: ContactUsComponent
  },
  {
    path: '**', 
    component: StatusComponent
  },
  {
    path: 'dashborad', component: DashboardComponent
  }
  
];
