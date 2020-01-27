import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      fName: new FormControl(''),
      lName: new FormControl(''),
      mName: new FormControl(''),
      hasMiddleName: new FormControl(false)
    });
  }
}
