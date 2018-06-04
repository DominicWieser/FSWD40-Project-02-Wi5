import { Component } from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


import { FirebaseService } from './services/firebase.services';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})

export class AppComponent implements OnInit{
  title = 'app';
  items: Items[];
  appState: string;

  
	constructor(private _firebaseService: FirebaseService) {

	}

	ngOnInit() {
		this.appState = 'default';
 

	    this._firebaseService.getItems().subscribe(items => {
	    	this.items = items;
	    });
	}
}

export interface Items {
	$key?: string;
	Date?: string;
	category?: string;
	author?: string;
	content?: string;
}