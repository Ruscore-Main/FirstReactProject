import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img src="https://png.pngtree.com/thumb_back/fw800/background/20190827/pngtree-retro-futuristic-1980s-style-mountain-landscape-background-image_302222.jpg" alt="" />
            <div className={classes.descriptionBlock}>
                <p>Main contentProfile</p>
                <p>after main content</p>
            </div>
        </div>
    )
}

export default ProfileInfo;