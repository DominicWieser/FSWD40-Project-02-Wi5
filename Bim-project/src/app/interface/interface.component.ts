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
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css'],
    providers: [FirebaseService]
})
export class InterfaceComponent implements OnInit {
  bookingdata: string;	
  name: string;
  surname: string;
  address: string;
  comment: string;
  username: string;
  courses: Courses[];
  login: boolean;
  courseId: number;

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
   let data;
    this._firebaseService.getCourses().subscribe(courses => {
        this.courses = courses;
      });
   data=this.getBooking();
   this.name=data.name;
   this.surname=data.surname;
   this.address=data.address;
   this.comment=data.comment;	
   let logdata=this.getLogin();
   this.username=logdata.username;
   this.courseId=Number(logdata.courseId);

  }

  getBooking(){

   let book= document.getElementById("bookdata").textContent;  
   return JSON.parse(book);
  }

   getLogin(){
   let log=document.getElementById('logindata').textContent;
   return JSON.parse(log);
  }
} 
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