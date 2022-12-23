import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Store';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>
      <div className="header__left">
        <img src={require('./Images/Logo.png')}
          alt="" />

        <div className="header__search">
          <SearchIcon />
          <input placeholder='Search VoiceHat' type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="My Connections" />
        <HeaderOption Icon={WorkIcon} title="Marketplace" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption 
          avatar={true}
          title="Me"
          onClick={logoutOfApp}
        />


      </div>
    </div>
  )
}

export default Header