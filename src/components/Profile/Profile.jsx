import React from 'react';
import MyPost from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPost profilePosts={props.profilePosts} dispatch={props.dispatch} newPostText={props.newPostText}/>
        </main>

    )
}

export default Profile;