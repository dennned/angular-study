import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post7',
  templateUrl: './post7.component.html',
  styleUrls: ['./post7.component.css']
})
export class Post7Component implements OnInit {

  arr = [1,1,2,3,5,7]

  obj = [
    {
      title:'Post 1',
      author:'Author 1',
      comments:[
        {name:'One', text:'test test'},
        {name:'One', text:'test test'},
        {name:'One', text:'test test'}
      ]
    },
    {
      title:'Post 2',
      author:'Author 2',
      comments:[
        {name:'One', text:'test test'},
        {name:'One', text:'test test'},
        {name:'One', text:'test test'}
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
