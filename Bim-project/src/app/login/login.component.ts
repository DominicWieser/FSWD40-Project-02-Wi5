import { Component } from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


import { FirebaseService } from '../services/firebase.services';
import { OnInit } from '@angular/core';
import * as crypto from "crypto-js";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FirebaseService]
})
export class LoginComponent implements OnInit {

  login: Login[];
  appState: string;	
  form: string;

  constructor(private _firebaseService: FirebaseService) { 
   this.form="none";
  }

  ngOnInit() {
  	this.appState = 'default';
 

	    this._firebaseService.getLogin().subscribe(login => {
	    	this.login = login;
	    });
  }    

  checkRegistering(username,password,repassword){
    //alert(username+" "+password+" "+repassword);
    let userExists=this.login.reduce(function(x=false,u){
   	                                    if(u.username==username){x=true;}
                                        return x; 
   	                                   });
    if(userExists===true){alert('error: user already exists');}
    if(password!=repassword){alert("passwords are not identical");}
    if(userExists&&(password==repassword))
      {let hashed=crypto.SHA256(password).toString(crypto.enc.Hex);
       alert('user '+username+' added '+hashed);
       this.addUser(username,hashed);
      }
    this.form='none';  
  }

  checkLogin(username,password){
   
   let userExists=this.login.reduce(function(x=false,u){
   	                                    if(u.username==username){x=true;}
                                        return x; 
   	                                   }); 
   let hashed=crypto.SHA256(password).toString(crypto.enc.Hex);
   let userPassword=this.login.reduce(function(x="none",u){if((u.username==username)&&(u.password==hashed))
                                                            {x=u.password;}
                                                           return x;  
                                                          });
   
   if(userExists!==true)//{alert("you logged in");}
    {alert("please register first");}
   if(hashed==userPassword){alert('you successfully logged in');}
   else{alert('wrong password or username');}
   this.form='none';
  }

  addUser(username,password) {
   let newUser = {
    username: username,
    password: password
   };
   this._firebaseService.addUser(newUser);
   
  }

  loginForm(){this.form='login';}
  registerForm(){this.form='register';}
}

export interface Login{
 $key?: string;
 username?: string; 
 password?: string;
}

