// import { useDispatch, useSelector } from "react-redux";
// import { addCashAction, getCashAction } from "./store/cashReducer";
// import { addCustomerAction, deleteCustomerAction } from "./store/customerReducer";
// import { fetchCustomers } from "./asyncAction/customres";
import { NavLink, Route, Routes } from "react-router-dom";
import { VanillaRedux } from "./vanila-redux/VanillaRedux";
import { ToolkitRedux } from "./toolkit-redux/ToolkitRedux";







export default function App() {


  return (
    <div className="App">
      <div className="header">
        <NavLink to="/vanilla-redux">Vanilla redux</NavLink>
        <NavLink to="/toolkit-redux">Toolkit redux</NavLink>
        {/* <NavLink to="/Slice-redux">Slice redux</NavLink> */}
      </div>
      <Routes>
        <Route path="/vanilla-redux" element={<VanillaRedux />}></Route>
        <Route path="/toolkit-redux" element={<ToolkitRedux />}></Route>
        {/* <Route path="/Slice-redux" element={<SliceRedux/>}></Route> */}
      </Routes>
    </div>
  )
}


