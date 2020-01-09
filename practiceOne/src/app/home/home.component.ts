import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trash = [
    {
      title:"My Project 1", desc:'Trash 1',nfO: 'something else 1'
    },
    {
      title:"My Project 2", desc:'Trash 2',nfO: 'something else 2'
    },
    {
      title:"My Project 3", desc:'Trash 3',nfO: 'something else 3'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
