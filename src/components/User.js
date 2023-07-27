import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch} from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from './firebase';

function User() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () =>{
    dispatch(logout())
    auth.signOut();
  };

  return (
    <div className='header'> 
        <div className='header_left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt=''></img>
            <div className='header_search'>
                <SearchIcon/>
                <input type='text' placeholder='Search'></input>
            </div>

        </div>


        <div className='headerOption'>
            <Avatar className='headerOption_icon' src={user?.photoURL}></Avatar>
            <h6 className='headerOption_title'>{user?.displayName}</h6>
        </div>

        <div onClick={logoutOfApp}>
          <LogoutIcon sx={{fontSize:25}}/>
        </div>

        
    
    </div>
  )
}

export default User