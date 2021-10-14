import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Feed from './app/components/Feed';
import Header from './app/components/Header';
import Login from './app/components/Login';
import Sidebar from './app/components/Sidebar';
import Widgets from './app/components/Widgets';
import { auth } from './app/firebase';
import { login, lougout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const  dispatch = useDispatch();
  useEffect(() => {
   auth.onAuthStateChanged(userAuth=>{
     if(userAuth){
// user is Logged in 
dispatch(login(
        {           email:userAuth.email,
                    uid:userAuth.uid,
                    displayName:userAuth.displayName,
                    photoUrl:userAuth.photoURL,}
));
     }else {
// user is logged out
dispatch(lougout());

     }
   })
  }, [])
  return (
    <div className="app">

      {/* Header */}
      <Header />

      {
        !user?
        (<Login/>):
         ( <div className="app__body">

        {/* Sidebar  */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets/>
      </div>)
      }
      {/* App Body  */}
      

    </div>
  );
}

export default App;
