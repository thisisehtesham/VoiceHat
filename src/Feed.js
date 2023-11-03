import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./css/feed.css"  
import Post from './Post';
import firebase from "firebase/compat/app";
import { db } from "./firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

  const user = useSelector(selectUser);

  const [posts, setPosts] =useState([]);
  const [input, setInput] = useState("");

  const submitPost = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
}

useEffect(() => {
  db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
    setPosts(snapshot.docs.map((doc)=>({
      id: doc.id,
      data: doc.data()
    })))
  })
}, [])

  return (
    <div className='feed'>
      <div className='feed__input'>
        <div className='feed__form'>
          <Avatar src={user.photoURL} id='feed__avatar'/>
          <form onSubmit={submitPost}>
            <input
            type='text'
            placeholder='Start a post'
            value={input}
            onChange={ event => setInput(event.target.value) }/>

            <input type='submit'/>
          </form>
        </div>

        <div className='feed__options'>
          <div className='options'>
            <PhotoIcon style={{color:'#70B5F9'}}/>
            <span>Photo</span>
          </div>

          <div className='options'>
            <YouTubeIcon style={{color:'#7FC15E'}}/>
            <span>Video</span>
          </div>

          <div className='options'>
            <BusinessCenterIcon style={{color:'#A872E8'}}/>
            <span>Job</span>
          </div>

          <div className='options'>
            <AssignmentIcon style={{color:'#E16745'}}/>
            <span>Write article</span>
          </div>
        </div>
      </div>

      <FlipMove>
      {
        posts.map(({id, data: {name, description, message, postURl}}) => {
          return <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoURL={postURl}
          />
        })
      }
      </FlipMove>      
    </div>
  )
}

export default Feed