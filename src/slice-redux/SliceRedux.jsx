import { useDispatch, useSelector } from "react-redux"
import { ADD_NOTE, DECREMENT, INCREMENT, REMOVE_NOTE } from "./store/mainReducer"



export const SliceRedux = () => 
{

    const count = useSelector(state =>state.main.count)
    const notes = useSelector(state =>state.main.notes)
    const dispatch = useDispatch()

    return (
        <div className="Toolkit-redux">
            <div className="cash">Counter {count}</div>
            <div className="content">
                <button onClick={() => dispatch(INCREMENT())}>+</button>
                <button onClick={() => dispatch(DECREMENT())}>-</button>
                <button onClick={() => dispatch(ADD_NOTE(prompt()))}>Add note</button>
                <button onClick={() => dispatch(REMOVE_NOTE())}>Remove note</button>
            </div>
            <div className="clients">
                {notes.map(note => 
                    <div>{note}</div>
                )}
            </div>
        </div>
    )
}