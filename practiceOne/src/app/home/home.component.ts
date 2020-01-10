import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
trash:Student[]=[
  {
    fName:'Jon',
    lName:'Stewart',
    sName:'JonStewart',
    pNumber:4444444
  },
  {
    fName:'Lourn',
    lName:'Selga',
    sName:'Looouuuurrrrnnn',
    pNumber:3333333
  },{
    fName:'Esteban',
    lName:'Zaragoza',
    sName:'Ezaragoza',
    pNumber:2222222
  }
];  
  constructor() { }

  ngOnInit() {
  }

}
