import { Avatar } from '@mui/material'
import React from 'react'
import "./css/header.css"
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import { logout } from './features/userSlice'

function Headeroptions({Icon, title, avatar}) {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header__options'>
        {
            Icon && <Icon />
        }
        {
            avatar && <Avatar name={avatar} src={user.photoURL} onClick={logoutOfApp}/>
        }
        <span>{title}</span>
    </div>
  )
}

export default Headeroptions