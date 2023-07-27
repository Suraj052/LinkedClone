import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOption({avatar,Icon, title, onClick}) {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption_icon'></Icon>}
        {avatar && (
          <Avatar className='headerOption_icon' src={user?.photoURL}>{user?.displayName[0]}</Avatar>
        )}

        <h6 className='headerOption_title'>{title}</h6>
        
    </div>
  )
}

export default HeaderOption 