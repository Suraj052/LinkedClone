import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css'
import HeaderOption from './HeaderOption';
import { useDispatch} from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { Avatar } from '@mui/material'
import { Menu,MenuItem} from "@mui/material";

function Header() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const logoutOfApp = () =>{
    dispatch(logout())
    auth.signOut();
    handleClose();
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
        <div className='header_right'>
            <HeaderOption Icon={HomeIcon} title={"Home"}></HeaderOption>
            <HeaderOption Icon={PeopleIcon} title={"My Network"}></HeaderOption>
            <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"}></HeaderOption>
            <HeaderOption Icon={MessageIcon} title={"Messaging"}></HeaderOption>
            <HeaderOption Icon={NotificationsIcon} title={"Notifications"}></HeaderOption>

            <div className='headerOption' onClick={handleClick}>
              <Avatar className='headerOption_icon' src={user?.photoURL}></Avatar>
              <h6 className='headerOption_title'>me</h6>
            </div>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom", // Display the menu below the anchor element
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
            >
                <MenuItem onClick={logoutOfApp}>Logout</MenuItem>
            </Menu>
          
        </div>
        

    </div>


  )
}

export default Header