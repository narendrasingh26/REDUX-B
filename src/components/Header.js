import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authAction } from '../store';

const Header = () => {
  const dispatchLog=useDispatch();
  const isShow=useSelector((state)=>state.Auth.isAuthentication)

  const logoutHandler=(event)=>{
    event.preventDefault()
    dispatchLog(authAction.logout())
  }
  return (
  <header className={classes.header}>
    <h1>Redux Auth</h1>
    {isShow && (<nav>
      <ul>
        <li>
          <a href='/'>My Products</a>
        </li>
        <li>
          <a href='/'>My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>)}
  </header>
  );
};

export default Header;
