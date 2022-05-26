import { Component, OnInit } from '@angular/core';
import { Item } from './item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'drop-down';

    
  items:Item[];
  itemtype: Number;
  itemSelected:Number;


  ngOnInit() {

    this.items=[
      {id:1,itemtype:"Staff"},
      {id:2,itemtype:"Admin"},
      {id:3, itemtype:"Student"}
    ];
   this.itemSelected=3;
    }
  }
    
  
  



