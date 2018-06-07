import { Component} from '@angular/core';

/*
  IMPORTING FIREBASE
*/
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


import { FirebaseService } from '../services/firebase.services';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [FirebaseService]
})

export class CoursesComponent implements OnInit {
  /*
    VARIABLES
  */
  courses: Courses[];
  appState: string;
  username: string;
  login: boolean;
  show: string[];
  showIt: boolean;

  /*
    CONSTRUCTOR
  */
  constructor(private _firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.appState = 'default';
  
    this._firebaseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });

    let logindata=this.getLogin();
    this.username=logindata.username;
    this.login=logindata.login;
    let s=[];
    this.courses.map(function(x){s.push('false');});
    this.show=JSON.parse(JSON.stringify(s));  
    this.showIt=false;
  }

  getLogin(){
   let log=document.getElementById('logindata').textContent;
   return JSON.parse(log);
  }

  bookCourse(courseId){
    if(this.login==false)
      {alert('please login first');}
    else
      {this.showIt=true;
      let Id=courseId.toString();
      let data={"username": this.username, "login": this.login, "courseId": Id};
      document.getElementById('logindata').textContent = JSON.stringify(data);
    }
  }
}

  /*
    INTERFACE
  */
export interface Courses {
  $key?: string;
  about?: string;
  courseName?: string;
  duration?: number;
  jobProspects?: string;
  picture?: string;
  price?: number;
  requirements?: string;
  start?: string;
}