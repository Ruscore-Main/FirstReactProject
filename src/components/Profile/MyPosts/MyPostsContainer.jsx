import React from 'react'
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/store';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';
import classes from './MyPosts.module.css'



const mapStateToProps = state => {
    return {
        newPostText: state.profilePage.newPostText,
        profilePosts: state.profilePage.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: (newPostText) => {
            dispatch(updateNewPostTextActionCreator(newPostText)); 
        },
        addPost: () => dispatch(addPostActionCreator())
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;