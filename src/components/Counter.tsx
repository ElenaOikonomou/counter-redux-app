import { useDispatch, useSelector } from "react-redux";
import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { decrement, increment, incrementByAmount, incrementAsync } from "../state/counter/counterSlice"
import { AppDispatch, RootState } from "../state/store";


const Counter = () => {
  //we connect our counter to the state 
  const count = useSelector((state: RootState) => state.counter.value)
  const dispach = useDispatch<AppDispatch>() //we use the useDispach which is a function saved De redux to connect redux and our react. If I work with async function I should also use the <AppDispach>
    return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=> dispach(incrementAsync(10))}>Increment</button>
      <button onClick={()=> dispach(decrement())}>Decrement</button>
    </div>
  );
};



export default Counter;