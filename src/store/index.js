// import { createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice=createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state){
        state.counter--
    },
    increse(state,action){
        state.counter=state.counter+action.payload
    },
    toggle(state){
        state.showCounter=!state.showCounter
    }
  },
});

const initialAuthState={isAuthentication:false}

const authSlice =createSlice({
    name:'Authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
           state.isAuthentication=true;
        },
        logout(state){
        state.isAuthentication=false;
        }
    }
})

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   if (action.type === "increse") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);
const store= configureStore({
    // reducer:counterSlice.reducer
    reducer:{
        Mycounter:counterSlice.reducer,
        Auth:authSlice.reducer
    }
  
})
export const counterAction=counterSlice.actions;
export const authAction=authSlice.actions;
export default store;
