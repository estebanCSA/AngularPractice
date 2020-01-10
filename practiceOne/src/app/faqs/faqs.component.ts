import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  flip = false;
  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
    alert('you clicked me');
  }
  switch(){
    this.flip = this.flip ? !this.flip : !this.flip;
    //this.flip = !this.flip; <- also works 
  }
  
}