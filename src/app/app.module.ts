import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { flush } from '@angular/core/testing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DaimondComponent } from './dashboard/daimond/daimond.component';
import { DNavComponent } from './dashboard/daimond/d-nav/d-nav.component';
import { TabsComponent } from './dashboard/daimond/tabs/tabs.component';
import { SearchComponent } from './dashboard/daimond/tabs/search/search.component';
import { ParcelComponent } from './dashboard/daimond/tabs/parcel/parcel.component';
import { GradeComponent } from './dashboard/daimond/tabs/grade/grade.component';
import { BasicComponent } from './dashboard/daimond/tabs/search/basic/basic.component';

const appRoutes:Routes=[
  {path:'home' , component:HomeComponent},
  { path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {path:'loginPage', component:LoginComponent},
  {path:'dashboard' , component:DashboardComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    
    NavbarComponent,
    
    LoginComponent,
    
    DashboardComponent,
    
    SidebarComponent,
    
    DaimondComponent,
    
    DNavComponent,
    
    TabsComponent,
    
    SearchComponent,
    
    ParcelComponent,
    
    GradeComponent,
    
    BasicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,{
        enableTracing:true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
