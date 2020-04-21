import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dropdownMenu(event) {
  	// if(event.currentTarget && event.currentTarget.parentElement && event.currentTarget.parentElement.parentElement){
  	// 	let topNavElement = event.currentTarget.parentElement.parentElement;
  	// }

  	// HTMLElement el = document.getElementById('navDropdownClick');
  	// console.log("event", el)
   //  // let topNavElement = document.getElementById("navDropdownClick");
   //  if (topNavElement.className === "topnav") {
   //    // change class from topnav to topnav.responsive
   //    topNavElement.className += " responsive";
   //  } else {
   //    topNavElement.className = "topnav";
   //  }
  }

}
