import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { BlogComponent } from './blog/blog.component';
import { CompaniesComponent } from './companies/companies.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';

// Initialize Firebase
  export const config = {
    apiKey: "AIzaSyCMXfeRCc_UhJxgpPjqMksVwhrh8nZaZMM",
    authDomain: "bimfactory-aa862.firebaseapp.com",
    databaseURL: "https://bimfactory-aa862.firebaseio.com",
    projectId: "bimfactory-aa862",
    storageBucket: "bimfactory-aa862.appspot.com",
    messagingSenderId: "232913041996"
  };
  firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    BlogComponent,
    Ccomponent,
    ServicesComponent
    CoursesComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
