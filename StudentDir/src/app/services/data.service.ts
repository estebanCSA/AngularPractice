import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardData: Student;
  private studentData:Student[]=[
    {
      fN:'Jon',
      lN:'Stewart',
      sN:'something',
      nN:'John',
      hob:'H-less John'
    },
    {
      fN:'Esteban',
      lN:'Zaragoza',
      sN:'Esteban Z',
      nN:'uB Darkness',
      hob:'chillin'
    },
    {
      fN: 'Joseangel',
      lN:'Pantoja',
      sN:'Angel',
      nN:'Angel',
      hob:'Hiking'
    },
    {
      fN: 'Deon',
      lN: 'Simmons Jr.',
      sN: 'Deon',
      nN: 'N/A',
      hob: 'Reading Comics'
    },
    {
      fN:'Trever',
      lN:'Edwards',
      nN:'Ted',
      sN:'Trever Edwards',
      hob:'Respecting Women'
    },
    {
      fN: 'Nimish',
      lN: 'Lal',
      sN: 'Nimish Lal',
      nN: 'Nimish',
      hob: 'playing video games'
    },
    {
      fN: 'Lourn',
      lN: 'Selga',
      sN: 'Lourn?',
      nN: 'Lrrrn',
      hob: 'Plastic Model Building'
    },
    {
      fN: 'Jon',
      lN: 'Stewart',
      sN: 'Jon Stewart',
      hob: 'Liking characters to death',
      nN: 'Jon-less H'
    },
    {
      fN:'Johnny',
      lN: 'Uribe',
      sN: 'JohnnyU',
      nN: 'Johnny',
      hob: 'Long walks on the beach'
    },
    {
      fN: 'Abraham',
      lN: 'Lopez',
      sN: 'something',
      nN: 'Abe',
      hob: 'Reading Manga'
    },
    {
      fN: 'Robert',
      lN: 'Burns',
      sN: 'Robert Burns',
      hob: 'Airsoft',
      nN: 'Rob'
    },
    {
      fN: "Zach",
      lN: "Davis",
      sN: "zdavis",
      nN: "Wynan",
      hob: "games"
    },
    {
      fN: 'David',
      lN: 'Abdallah',
      sN: 'DaveDaAverageDude',
      nN: 'Dave',
      hob: 'Work'
    },
    {
      fN: 'Carter',
      lN: 'Galvez',
      sN: 'carter209cg',
      hob: 'Messing up logic and code',
      nN: 'son of Bonacci'
    },
    {
      fN: 'Francisco',
      lN: 'Chavez',
      nN: 'Frankie',
      hob: 'reading',
      sN: 'Francisco Chavez'
    }
  ];
  constructor() { }

  getStudent():Student[]{
    return this.studentData;
  }

  setCardData(person: Student){
    // Save student data into
    this.cardData= person;
  }

  getCardData(): Student{
    //Retrieve student data for card
    return this.cardData;
  }

}