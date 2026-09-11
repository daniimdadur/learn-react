import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state: number, action: PayloadAction<number | undefined>): number => {
            if (action.payload) {
                return state + action.payload;
            } else {
                return state + 1;
            }
        },
        decrement: (state: number, action: PayloadAction<number | undefined>): number => {
            if (action.payload) {
                return state - action.payload;
            } else {
                return state - 1;
            }
        }
    }
});

export const {increment, decrement} = counterSlice.actions;