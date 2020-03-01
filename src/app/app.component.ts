import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MYANG7APP';
  students:any[];
  constructor(){
   this.students= [
     {
       studentid:1,
       name:'Mukesh',
       age:23

     },
     {
      studentid:2,
      name:'Mukesh-2',
      age:23

    },
    {
      studentid:3,
      name:'Mukesh-3',
      age:23

    }, {
      studentid:4,
      name:'Mukesh-4',
      age:23

    },
    {
      studentid:5,
      name:'Mukesh-5',
      age:23

    }
   ]
  }
  getmoreStudent():void{
    this.students= [
      {
        studentid:1,
        name:'Mukesh',
        age:23
 
      },
      {
       studentid:2,
       name:'Mukesh-2',
       age:23
 
     },
     {
       studentid:3,
       name:'Mukesh-3',
       age:23
 
     }, {
       studentid:4,
       name:'Mukesh-4',
       age:23
 
     },
     {
       studentid:5,
       name:'Mukesh-5',
       age:23
 
     },
     {
      studentid:6,
      name:'Anvi',
      age:23

    }
    ]
  }
}
