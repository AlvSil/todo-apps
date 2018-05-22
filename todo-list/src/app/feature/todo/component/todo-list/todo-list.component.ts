import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { getTodos } from '../../store/todo.reducer';
import * as Actions from '../../store/todo.actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];
  constructor(private store: Store<Todo>) {
  }

  ngOnInit() {
  }

  public get todos$() {
    return this.store.select(getTodos);
  }

  public addTodo(todoInput){
    let todo: Todo = {id: undefined, value: todoInput.value};
    this.store.dispatch(new Actions.AddTodo({todo}));
  }

  public removeTodo(todoId){
    this.store.dispatch(new Actions.RemoveTodo({todoId}));
  }

  public removeAllTodos(){
    this.store.dispatch(new Actions.RemoveAllTodos());
  }
}
