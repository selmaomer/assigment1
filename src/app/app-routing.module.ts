import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  {path:'',redirectTo:'home',pathMatch:'full'}, 
  {path:'',component:HomeComponent,title: 'home'},
{path:'about',component:AboutComponent,title: 'ABOUT'},
{path:'portfolio',component:PortfolioComponent,title:'portfolio'},
{path:'contact',component:ContactComponent,title:'CONTACT'}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
