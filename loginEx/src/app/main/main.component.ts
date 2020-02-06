import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dService: DataService) { 
    dService
  }

  ngOnInit() {
  }
  //avlues
  logIn(userName: string, firstName: string, lastName: string, email: string, confirmEmail: string, passWord: string, confirmPassWord: string, ) {
    //check if email is confirmed
    //check if pword is the same
    if (email === confirmEmail) {
      if (passWord === confirmPassWord) {

      }
    }
    //we are going to compare pword stored in service
    if (this.dService.checkCred(userName, passWord)) {
      alert('you are logged in');
    } else {
      alert('try again');
    }
  }

  signUp(userName: string, firstName: string, lastName: string, email: string, confirmEmail: string, passWord: string, confirmPassWord: string, ) {
    //check if email is confirmed
    //check if pword is the same
    if (email === confirmEmail) {
      if (passWord === confirmPassWord) {
        //check if username is taken. daata service
        if (this, this.dService.checkIfUserExists(userName)) {
          alert('user name already exists');
        } else {
          //you send entire object to be added to userList
          let addThisName: User = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            passWord: passWord
          };
          this.dService.addUser(addThisName);
        }
      } else {
        alert('password doesnt match');
      }
    } else {
      alert('unexpected error ocurred');
    }
  }
}
