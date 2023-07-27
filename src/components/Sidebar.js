import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Sidebar() {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src='https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt=''></img>
        <Avatar src={user.photoURL} className='sidebar_avatar' sx={{ width: 50, height: 50 }} ></Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you</p>
          <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
          <p>Impressions of post</p>
          <p className='sidebar_statNumber'>2,448</p>
        </div>
      </div>
      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("Redux")}
        {recentItem("Firebase")}
        {recentItem("Clone")}
        {recentItem("Web Development")} 
      </div>
      
    </div>
  )
}

export default Sidebar