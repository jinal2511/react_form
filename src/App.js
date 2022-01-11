
import './App.css';
import Login from './component/Login';
import { useSelector } from 'react-redux';
import {  selectUser } from './features/userSlice';
import Logout from './component/Logout';
const App = () =>  {

  const user = useSelector(selectUser);
  
  return (
    <>
    {user ? <Logout /> : <Login /> }
    </>
  );
}
export default App;
