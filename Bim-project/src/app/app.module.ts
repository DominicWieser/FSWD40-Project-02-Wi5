import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { BlogComponent } from './blog/blog.component';
import { CompaniesComponent } from './companies/companies.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const firebaseConfig ={
    apiKey: "AIzaSyAKzv39myroOuxaJnE09xSjli7AP7MLmXE",
    authDomain: "bim-project-713dc.firebaseapp.com",
    databaseURL: "https://bim-project-713dc.firebaseio.com",
    projectId: "bim-project-713dc",
    storageBucket: "bim-project-713dc.appspot.com",
    messagingSenderId: "143121033937"
};

const appRoutes: Routes = [
{
  path: '', component: MainComponent
},
{
  path: 'why', component: ServicesComponent
},
{
  path: 'courses', component: CoursesComponent
},
{
  path: 'login', component: LoginComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    BlogComponent,
    CompaniesComponent,
    ServicesComponent,
    CoursesComponent,
    LoginComponent,
    MainComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
