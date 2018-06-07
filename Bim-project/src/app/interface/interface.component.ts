import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  bookingdata: string;	

  constructor() { }

  ngOnInit() {
   this.bookingdata=this.getBooking();	
  }

  getBooking(){
   return document.getElementById("bookdata").textContent;  

  }
} 
