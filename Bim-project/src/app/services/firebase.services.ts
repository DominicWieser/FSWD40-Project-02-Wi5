import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseService{
  items: FirebaseListObservable<Items[]>;

  constructor(private af: AngularFireDatabase) {
    
  }

  getItems() {
      this.items= this.af.list('/items') as FirebaseListObservable<Items[]>;
      return this.items;
  }

}
export interface Items {
  $key?: string;
  Date?: string;
  category?: string;
  author?: string;
  content?: string;
}