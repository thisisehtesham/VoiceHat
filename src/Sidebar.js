import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import GroupsIcon from '@mui/icons-material/Groups';

function Sidebar() {

    const user = useSelector(selectUser);

  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img src='https://media.licdn.com/dms/image/C5616AQHRT5Ed66Q0hQ/profile-displaybackgroundimage-shrink_200_800/0/1643578030094?e=2147483647&v=beta&t=0KWSKBOT5ZpmGPy-PEXfkVtRwoZ7CUXbP9aUXaxxl6Q' alt='backgroundimage' />
            <div className='profile__details'>
                <Avatar src={user.photoURL} id='sidebar__avatar'/>
                <h4>{user.displayName}</h4>
                <p>{user.email}</p>
            </div>
            
            <div className='profile__stats'>
                <span>Profile viewers</span>
                <span className='stat__numbers'>36</span>
            </div>

            <div className='profile__stats'>
                <span>Post impressions</span>
                <span className='stat__numbers'>114</span>
            </div>
            </div>
            
            <div className='sidebar__recent'>
                <p>Recent</p>
                <p className='hash'><span><GroupsIcon/></span> Java Developers Community</p>
                <p className='hash'><span><GroupsIcon/></span> React Js & React Native</p>
                <p className='hash'><span><GroupsIcon/></span> Front End Developer Group</p>
                <p className='hash'><span><GroupsIcon/></span> Elevate your Node.js expertise</p>
                <p className='hash'><span><GroupsIcon/></span> Software Engineering Group</p>
                <p className='hash'><span><GroupsIcon/></span> Artificial Intelligence, Machine Learning</p>
            </div>
        

    </div>
  )
}

export default Sidebar