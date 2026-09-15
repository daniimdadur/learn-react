import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface Todo {
    id: number;
    name: string;
}

let nextId: number = 1;
const initialState: Todo[] = [];

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{name: string}>): void => {
            const {name} = action.payload;
            state.push({name, id: nextId++});
        },
        removeTodo: (state, action: PayloadAction<{id: number}>): void => {
            const {id} = action.payload;
            const index: number = state.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        updateTodo: (state, action: PayloadAction<Todo>): void => {
            const {id, name} = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.name = name;
            }
        }
    },
    selectors: {
        getTodo: (state, id: number): Todo | undefined => {
            return state.find(todo => todo.id === id);
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = todoListSlice.actions;
export const {getTodo} = todoListSlice.selectors;