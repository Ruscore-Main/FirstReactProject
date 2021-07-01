import React from 'react';
import MyPostContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router';
const Profile = props => {
    if (!props.isAuth) return <Redirect to='/login'/>  
    
  
    return (
        <main>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </main>
    )
}

export default Profile;