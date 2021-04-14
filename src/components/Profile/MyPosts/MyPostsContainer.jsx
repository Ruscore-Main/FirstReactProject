import React from 'react'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/store';
import MyPost from './MyPosts';
import classes from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPostContainer = (props) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    
    const updateNewPostText = newPostText => {
        props.dispatch(updateNewPostTextActionCreator(newPostText)); 
    }

   return <MyPost updateNewPostText={updateNewPostText} addPost={addPost} newPostText={props.newPostText} profilePosts={props.profilePosts}/>
            
}

export default MyPostContainer;