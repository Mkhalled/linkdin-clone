import React from 'react'

import './Header.css';

import LogoLinkedin from './linkedin.svg';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { lougout } from '../../features/userSlice';
import { auth } from '../firebase';
function Header() {
    const dispatch = useDispatch(); 
    const logoutOfApp=()=>{
        console.log("LogoutOfAppl")
    dispatch(lougout());
    auth.signOut();
    }

    return (
       
            <div className="header">


                <div className="header__left">
                    <img src={LogoLinkedin} alt="" />
                    <div className="header__searsh">
                        {/* SearchIcon */}
                        <SearchIcon />
                        <input placeholder="Search" type="text" />
                    </div>

                </div>

                <div className="header__right">
                    <HeaderOption Icon={HomeIcon} title="Home" />
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                    <HeaderOption Icon={ChatIcon} title="Messaging" />
                    <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                    {/* avatar="https://media-exp1.licdn.com/dms/image/C5603AQHkz7zfZU-Fyw/profile-displayphoto-shrink_100_100/0/1585043817004?e=1635379200&v=beta&t=TX7BoK9TuyLZjrMosvHkYqsJd5cVjIvl8REVUfxI_q0"  */}
                    <HeaderOption 
                    
                    avatar title="Me" onClick={logoutOfApp}
                    />

                </div>
            </div>
      
    )
}

export default Header
