import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
userList: User[]=[];

  constructor() { }

  checkCred(userName: string, passWord:string): boolean {
    let result = false;
    if(userName === this.userList[0].userName){
      if(passWord === this.userList[0].passWord){
        result = true;
      }
    }
    return result;
  }
  checkIfUserExists(userName: string){
    //going to search for user name
    let result = false;
    if(this.userList.find(x => userName === x.userName) !== undefined){
      result = true;
    };
    return result;
  }
  addUser(userAccount:User){
   // const userAccount: User ={
     // userName: uN,
     // passWord: pW
    //};
    this.userList.push(userAccount);
    localStorage.setItem('users', JSON.stringify(this.userList));
    console.log(this.userList);
  }
  setUserList(){
    if(JSON.parse(localStorage.getItem('user'))){
    this.userList = JSON.parse( localStorage.getItem('user'));
    }
  }
}