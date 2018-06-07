import { Component} from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


import { FirebaseService } from '../services/firebase.services';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [FirebaseService]
})
export class BookingComponent implements OnInit {
  courseId: number;
  username: string;
  courses: Courses[];
  price: number;
  

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
  	let logdata=this.getLogin();
  	this.username=logdata.username;
  	this.courseId=Number(logdata.courseId);
  	

  	  this._firebaseService.getCourses().subscribe(courses => {
        this.courses = courses;
      });

     this.price=this.courses[this.courseId].price; 
  }

  getLogin(){
   let log=document.getElementById('logindata').textContent;
   return JSON.parse(log);
  }

  checkIt(name,surname,address,comment){
   let bookdata=name+surname+address+comment;
   alert(bookdata);
  }

  bookIt(name,surname,address,comment){
   let bookdata={"name": name, "surname": surname, "address": address, "comment": comment};
   
   //alert(document.getElementById('bookdata').textContent);
   document.getElementById("bookdata").textContent=JSON.stringify(bookdata);           
   //alert(bookdata);
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