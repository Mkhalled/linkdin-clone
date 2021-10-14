import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import "./Sidebar.css"
function Sidebar() {

    const user=useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>


        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="" />
                {/*  */}
                <Avatar src={user.photoUrl} className="sidebar__avatar" >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you </p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p> Views on post</p>
                    <p className="sidebar__statNumber">2,488</p>
                </div>
            </div>
            <div className="sidebar__botton">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('programming')}
                {recentItem('design')}
                {recentItem('developer')}
                {recentItem('softwareengineering')}
            </div>
        </div >
    )
}

export default Sidebar
