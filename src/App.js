import { useDispatch, useSelector } from "react-redux";




export default function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash);
  const addCash = (cash) =>{
    dispatch({type:"ADD_CASH", payload:cash})    
  }

  const getCash = (cash) =>{
    dispatch({type:"GET_CASH", payload:cash})    
  }



  return (
    <div className="App">
        <div className="cash">balance: {cash}</div>
      <div className="content" style={{display: "flex"}}>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
      </div>
    </div>
  )
}


