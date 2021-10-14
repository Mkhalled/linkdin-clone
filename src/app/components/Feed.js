import React, { useState ,useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import "./Feed.css"

import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import FlipMove from 'react-flip-move';
import InputOption from './InputOption';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Feed() {
    const [input,setInput]=useState("");
    const [posts,setPosts]=useState([]);
    const user =useSelector(selectUser);
   useEffect(()=>{
  db.collection("posts").orderBy("timestamp","desc"). onSnapshot(
      snapshot=>(
          setPosts(snapshot.docs.map(doc=>(
            {
                id:doc.id,
                data:doc.data(),
            }
          )))
      ))
   },[]); 

    const sendPost = e=> {
        e.preventDefault();
        db.collection('posts').add(
            {
                name:user.displayName,
                description: user.email,
                message:input,
                photoUrl:user.photoUrl,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),

         });
         setInput("");
        
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} type="text" onChange={e=> setInput(e.target.value)}/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo"/>
                    <InputOption Icon={SubscriptionsIcon} color="#7A33E" title="Video"/>
                    <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event"/>
                    <InputOption Icon={CalendarViewDayIcon} color="#7FC15E" title="Write article"/>
                </div>
            </div>
            {/* Posts */}
            <FlipMove>
            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                <Post 
                key={id}
                 name={name}
                  description={description}
                  message={message}
                  photoUrl={photoUrl}
                />
            ))}
</FlipMove>
            
        </div>
    )
}

export default Feed
