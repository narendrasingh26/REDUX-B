import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterAction } from '../store';

const Counter = () => {

 const counter= useSelector((state)=>state.Mycounter.counter);
 const showCounter = useSelector(state=>state.Mycounter.showCounter)
  const toggleCounterHandler = () => {

    dispatch
      // type:'toggle'
      (counterAction.toggle())
    
  };
  const dispatch=useDispatch();
  const incrementHandler=()=>{
     dispatch(counterAction.increment())
  }
  const decrementHandler=()=>{
     dispatch(counterAction.decrement())
  }
  const increseHandler=()=>{
    dispatch(counterAction.increse(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     
    
      {showCounter &&<div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={decrementHandler}>Decremenent</button>
      <button onClick={increseHandler}>incrementby10</button>
      <button onClick={incrementHandler}> Increment</button>
      </div>
     
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
     
    </main>
  );
};

export default Counter;
