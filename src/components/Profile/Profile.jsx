import React from 'react';
import MyPost from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <main>
            <img src="https://png.pngtree.com/thumb_back/fw800/background/20190827/pngtree-retro-futuristic-1980s-style-mountain-landscape-background-image_302222.jpg" alt=""/>
            <p>Main contentProfile</p>
            <p>after main content</p>
            <MyPost />
        </main>

    )
}

export default Profile;