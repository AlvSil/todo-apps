import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  todos = [
    {id: 1, text: "todo1"},
    {id: 2, text: "todo2"},
    {id: 3, text: "todo3"},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
