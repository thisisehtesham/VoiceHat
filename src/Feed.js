import React, { useEffect, useState } from "react"
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from './InputOption';
import ImageICon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              placeholder='Start a post'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptons">
          <InputOption Icon={ImageICon} title="Photo"
            color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video"
            color="#7FC15E" />
          <InputOption Icon={EventNoteIcon} title="Event"
            color="#E7A33E" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article"
            color="#C0CBCD" />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
      {posts.map(({ id, data: { name, description, message,
        photoUrl } }) => (
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
  );
}

export default Feed;