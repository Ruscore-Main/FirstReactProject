import React from 'react';
import MyPostContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
    return (
        <main>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </main>
    )
}

export default Profile;