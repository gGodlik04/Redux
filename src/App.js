import { useDispatch, useSelector } from "react-redux";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { addCustomerAction, deleteCustomerAction } from "./store/customerReducer";




export default function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addClient = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const deleteClient = (customer) => {
    dispatch(deleteCustomerAction(customer.id))
  }
  


  return (
    <div className="App">
      <div className="cash">Balance: {cash}</div>
      <div className="content" style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
        <button onClick={() => addClient(prompt())}>Add client</button>
        <button>delete client</button>
      </div>
      {customers.length > 0 ?
        <div className="clients">
          {customers.map(customer => 
              <div onClick={() => deleteClient(customer)}>{customer.name}</div>
            )}
        </div>
        :
        <div className="clients">
          Клиенты отсутствуют
        </div>
      }
    </div>
  )
}


