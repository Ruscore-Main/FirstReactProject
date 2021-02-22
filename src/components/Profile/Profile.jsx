import React from 'react';
import MyPost from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPost profilePosts={props.profilePosts} addPost={props.addPost}/>
        </main>

    )
}

export default Profile;