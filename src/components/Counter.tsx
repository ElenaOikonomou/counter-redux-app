import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { decrement, increment, incrementByAmount } from "../state/counter/counterSlice"
import { RootState } from "../state/store";


const Counter = () => {
  //we connect our counter to the state 
  const count = useSelector((state: RootState) => state.counter.value)
  const dispach = useDispatch() //we use the useDispach which is a function saved De redux to connect redux and our react
    return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=> dispach(incrementByAmount(10))}>Increment</button>
      <button onClick={()=> dispach(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;