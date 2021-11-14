import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  x: number;
  y: number;
  min = 0;
  max = 20;



  constructor(){
    this.x = 3;
    this.y = 6;
  }

  print(){
    console.log(this.x);
  }

  setX(x: number | null){
    this.x = x || 0;
  }


}
