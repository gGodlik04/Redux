import { createAction, createReducer } from "@reduxjs/toolkit";

export const INCREMENT = createAction('INCREMENT');
export const DECREMENT = createAction('DECREMENT');
export const ADD_NOTE = createAction('ADD_NOTE');
export const REMOVE_NOTE = createAction('REMOVE_NOTE');



const initialState = {
    count: 0,
    notes: ['buy me a river','broken stone','fall apart']
} 

export default createReducer(initialState, builder => {
    builder

        .addCase('ADD_NOTE', (state, action)=> {
            state.notes.push(action.payload)
        })   

        .addCase('REMOVE_NOTE', (state)=> {
            state.notes.pop()
        })   

        .addCase('INCREMENT', (state)=> {
            state.count = state.count + 1
        })   

        .addCase('DECREMENT', (state)=> {
            state.count = state.count - 1
        })   
})


        // case ADD_NOTE:
        //     return {...state, notes: [...state.notes, action.payload]}
        // case REMOVE_NOTE:
        //     return {...state, ...state.notes.pop()}



