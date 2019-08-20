import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { flush } from '@angular/core/testing';

const appRoutes:Routes=[
  {path:'home' , component:HomeComponent},
  { path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {path:'loginPage', component:LoginComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    
    NavbarComponent,
    
    LoginComponent
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
