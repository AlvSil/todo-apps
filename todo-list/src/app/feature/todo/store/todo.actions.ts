import { Action } from "@ngrx/store";
import { Todo } from "../todo";

export const ADD_TODO = "[TODO] add";
export const REMOVE_TODO = "[TODO] remove";
export const REMOVE_ALL_TODOS = "[TODO] remove all";

export class AddTodo implements Action {
    readonly type = ADD_TODO;

    constructor (public payload: AddTodoPayload) {}
}

export interface AddTodoPayload {
    todo: Todo;
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;

    constructor (public payload: RemoveTodoPayload) {}
}

export interface RemoveTodoPayload {
    todoId: number;
}

export class RemoveAllTodos implements Action {
    readonly type = REMOVE_ALL_TODOS;

    constructor () {}
}

export type Actions = AddTodo
| RemoveTodo
| RemoveAllTodos;