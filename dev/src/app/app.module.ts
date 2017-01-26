import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { UniversalModule } from 'angular2-universal/browser';
import { CookieService } from 'angular2-cookie/services/cookies.service';

////////////////////// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SlideimageComponent } from './home/slideimage/slideimage.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { HomeItemComponent } from './home/home-item/home-item.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminComponent } from './admin/admin.component';

/////////////////////// Services
import { UserService } from './services/user.service';
import { FacebookService } from './services/facebook.service';
import { User } from './class/user';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },

  { path: 'admin', component: AdminComponent },
  
  { path: '404', component: NotfoundComponent },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SlideimageComponent,
    SidebarComponent,
    HomeItemComponent,
    SignInComponent,
    ProductComponent,
    NotfoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UniversalModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CookieService,
    UserService,
    FacebookService,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
