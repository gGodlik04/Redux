import { createSlice } from "@reduxjs/toolkit";



const toolkitSlice = createSlice({
    name: "toolkit",
    initialState:{
        count: 0,
        notes: ['buy me a river','broken stone','fall apart']
    },
    reducers:{
        INCREMENT(state) {
            state.count = state.count + 1
        },
        DECREMENT(state) {
            state.count = state.count - 1
        },
        ADD_NOTE(state, action) {
            state.notes.push(action.payload)
        },
        REMOVE_NOTE(state) {
            state.notes.pop()
        }
    }
})


export default toolkitSlice.reducer
export const {INCREMENT, DECREMENT, ADD_NOTE, REMOVE_NOTE} = toolkitSlice.actions