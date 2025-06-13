import { createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit"
//each sice is responsible for its own state
interface CounterState{
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(incrementAsync.pending, ()=>{
            console.log("incrementAsync pending.pending")
        })
        .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload
        })
    }
}) // it doesn's change the state directly. Under the hood the counterSlice creates a copy of the state and overwrites the existing one with the changed mutated state

//how to create an asyn function
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async(amount: number) => {
    await new Promise ((resolve) => setTimeout(resolve, 1000))
    return amount
  }
)//in the case of async functions we have to define the name of our function unlike our increment/decrement functions above





export default counterSlice.reducer
export const {increment, decrement, incrementByAmount} = counterSlice.actions //this is how we export the actions