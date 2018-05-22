import { Todo } from "../todo";
import { Actions, ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from "./todo.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const initialState: Todo[] = [];
let todoIds: number = 0;

export function reducer(
    state = initialState,
    action: Actions
): Todo[] {
    let newState: Todo[];
    switch (action.type) {
        case ADD_TODO: {
            todoIds++;
            let todo: Todo = {id: todoIds, value: action.payload.todo.value};
            state.push(todo);
            newState = state;
        return newState;
        }
        case REMOVE_TODO: {
            let todoIdToRemove = action.payload.todoId;
            newState = state.filter(function(todo) {
                return todo.id != todoIdToRemove;
            });
        return newState;
        }
        case REMOVE_ALL_TODOS: {
            let emptyState: Todo[] = [];
            return emptyState;
        }
        default: {
        return state;
        }
    }
}

// Selectors
export const getTodosState = createFeatureSelector<Todo>('todo');
export const getTodos = createSelector(getTodosState, todosState => todosState);
