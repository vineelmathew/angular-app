import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

imgPath:string="https://angular.io/assets/images/logos/angular/angular.svg";


  constructor() { }

  ngOnInit(): void {
  }
name:string="";

welcome()
{
  console.log("welcome mathew ");
  
}
blueColor="blue";

red="red";
blue="blue";
green="green";
pickedcolor=false;
pcolor(color:string):boolean
{
return color==this.red;
}

}
