import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
 odd=[1,3,5,7,9,11]
 even=[2,4,6,8,10,12]

 change=true
 value=1009

 changeNumbers(){
   this.change=!this.change
 }
  constructor() { }

  ngOnInit(): void {
  }

}
