import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

 const counter= useSelector((state)=>state.counter);
  const toggleCounterHandler = () => {};
  const dispatch=useDispatch();
  const incrementHandler=()=>{
     dispatch({type:'INCREMENT'})
  }
  const decrementHandler=()=>{
     dispatch({type:'DECREMENT'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={decrementHandler}>DECREMENT</button>
      <button onClick={incrementHandler}>INCREMENT</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
