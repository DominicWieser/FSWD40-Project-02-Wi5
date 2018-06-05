import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseService{
  items: FirebaseListObservable<Items[]>;
  courses: FirebaseListObservable<Courses[]>;

  constructor(private af: AngularFireDatabase) {
    
  }

  getItems() {
      this.items= this.af.list('/items') as FirebaseListObservable<Items[]>;
      return this.items;
  }

  getCourses() {
      this.courses= this.af.list('/courses') as FirebaseListObservable<Courses[]>;
      return this.courses;
  }

}

export interface Items {
  $key?: string;
  Date?: string;
  category?: string;
  author?: string;
  content?: string;
  img?: string;
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