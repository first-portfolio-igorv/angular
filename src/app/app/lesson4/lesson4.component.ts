import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss']
})
export class Lesson4Component implements OnInit {
  public text!:any;
  public firstName!: string;
  public lastName!: string;
  public number!: string;
  public check = false;
  public sortCheck = true;
  public sortCheck1 = true;
  public sortCheck2 = true;
  public test1 = /^[a-zA-ZА-Яа-я]{4,15}$/;
  public test2 = /^[0-9]{10}$/;
  public num=0;
  public saveCheck=true;
  public phones: phoneList[] = [
    {
      firstName: "Igor",
      lastName: "Petrovych",
      number: "0679999999"
    },
    {
      firstName: "Petro",
      lastName: "Pivtorack",
      number: "0678888888"
    },
    {
      firstName: "Yaroslava",
      lastName: "Velychko",
      number: "0677777777"
    },
    {
      firstName: "Sonya",
      lastName: "Globez",
      number: "0670000000"
    }
  ]
  edit(index:number){
    this.saveCheck=false;
    this.check=true;
    this.firstName=this.phones[index].firstName;
    this.lastName=this.phones[index].lastName;
    this.number=this.phones[index].number;
    this.num=index;
  }
  delete(index:number){
    this.phones.splice(index,1)
  }
  add() {
    this.check = !this.check;
  }
  save() {
    if (
      this.test1.test(this.firstName) &&
      this.test1.test(this.lastName) &&
      this.test2.test(this.number)
    ) {
      this.phones.push({
        firstName: this.firstName,
        lastName: this.lastName,
        number: this.number
      })
      this.firstName = "";
      this.lastName = "";
      this.number = "";
      this.check = false;
    }
  }
  saveEdit(){
    if (
      this.test1.test(this.firstName) &&
      this.test1.test(this.lastName) &&
      this.test2.test(this.number)
    ) {
      this.phones[this.num].firstName=this.firstName;
      this.phones[this.num].lastName=this.lastName;
      this.phones[this.num].number=this.number;
      this.firstName = "";
      this.lastName = "";
      this.number = "";
      this.check=false;
      this.saveCheck=true;
    }
  }
  sort() {
    this.sortCheck = !this.sortCheck;
  }
  sort1() {
    this.sortCheck1 = !this.sortCheck1;
  }
  sort2() {
    this.sortCheck2 = !this.sortCheck2;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
export interface phoneList {
  firstName: string,
  lastName: string,
  number: string
}