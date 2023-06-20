import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';


function App() {
  const Show=useSelector((state)=>state.Auth.isAuthentication)
  return (
    <>
     <Header/>
    {!Show && <Auth/>}
    {Show && <UserProfile/>}

    <Counter />
    </>
   
  );
}

export default App;
