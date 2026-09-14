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
    },
    selectors: {
        getDoubleCounter: (state: number): number => {
            return state * 2;
        },
        getCounter: (state: number, value: number): number => {
            return state * value;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export const {getDoubleCounter, getCounter} = counterSlice.selectors;