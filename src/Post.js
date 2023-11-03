import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import './css/post.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef (({name, description, message, photoURL}, ref) => {
  return (
    <div className='posts' ref={ref}>
        <div className='post__header'>
            <div className='post__headerLeft'>
                <Avatar src={photoURL}>{name[0]}</Avatar>
                <div className='post_profile_details'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div>
            <MoreHorizIcon className='dotIcon'/>
            <CloseIcon className='closeIcon'/>
            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__footer'>
            <div className='post__footer__option'>
                <ThumbUpOffAltIcon />
                <span>Like</span>
            </div>

            <div className='post__footer__option'>
                <ChatOutlinedIcon />
                <span>Comment</span>
            </div>

            <div className='post__footer__option'>
                <RepeatOutlinedIcon />
                <span>Repost</span>
            </div>

            <div className='post__footer__option'>
                <SendIcon />
                <span>Send</span>
            </div>
        </div>
    </div>
  )
})

export default Post;