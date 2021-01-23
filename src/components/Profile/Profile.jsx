import React from 'react';
import MyPost from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <main>
            <ProfileInfo />
            <MyPost />
        </main>

    )
}

export default Profile;