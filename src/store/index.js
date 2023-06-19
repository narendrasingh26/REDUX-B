import { createStore } from "redux";

// const state={counter:0}
const counterReducer=(state={counter:0},action)=>{

    if(action.type==='INCREMENT'){
        return{
            counter:state.counter+2
        }
    }
    if(action.type==='DECREMENT'){
        return{
            counter:state.counter-2
        }
    }
        return state;
}



const store=createStore(counterReducer);

export default store;