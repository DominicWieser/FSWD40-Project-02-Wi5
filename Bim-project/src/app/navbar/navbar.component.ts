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
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [FirebaseService]

})
export class NavbarComponent implements OnInit {
  login: boolean;
  loginUser: string;
  loginB: boolean;

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    let logindata=this.getLogin();
    this.login=logindata.login;
  }
  getLogin(){
    let log=document.getElementById('logindata').textContent;
    return JSON.parse(log);
   }
   checkForm()
   {
     let logindata=this.getLogin();
     this.loginUser = logindata.username;
     this.loginB = logindata.login;

     return this.loginB;
   }
  
   logOut(){

 
      let log={"username": "unknown" , "login": false}; 
        document.getElementById('logindata').textContent=JSON.stringify(log);


   }
}
