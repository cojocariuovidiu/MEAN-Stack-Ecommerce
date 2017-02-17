import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { UniversalModule } from 'angular2-universal/browser';
import { CookieService } from 'angular2-cookie/services/cookies.service';

////////////////////// Component ///////////////////
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
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';

/////////////////////// Services ///////////////////////
import { UserService } from './services/user.service';
import { FacebookService } from './services/facebook.service';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

////////// Class ///////////////////////////
import { User } from './class/user';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },

  { path: 'admin', component: AdminComponent,
    children:[
      { path: '', component: AddproductComponent },
      { path: 'product/add', component: AddproductComponent },
      { path: 'category/add', component: AddcategoryComponent },
    ]
  },
  
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
    AdminComponent,
    AdminSidebarComponent,
    AddproductComponent,
    AddcategoryComponent
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
    ProductService,
    FormBuilder,
    User,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
