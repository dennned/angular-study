import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.css']
})
export class Post3Component implements OnInit {

  title = ''
  inputValue = ''
  constructor() { }

  // onInput(event: KeyboardEvent){
  //   this.inputValue = (<HTMLInputElement>event.target).value
  // }

  onInput(event: any){
    this.title = event.target.value
  }

  onBlur(str: string){
    this.inputValue = str
  }

  onClick(){
    console.log('CLICK')
  }

  // ngModel(str: string){
  //   this.title = str
  // }

  ngOnInit() {
  }

}
