import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = props => {
    return (
        <div>
            <div>
            <img className={classes.profileBackgroundImage} src="https://png.pngtree.com/thumb_back/fw800/background/20190827/pngtree-retro-futuristic-1980s-style-mountain-landscape-background-image_302222.jpg" alt="" />
            </div>
            <img src={props.profile?.photos.large || "https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"} alt="" />
            <div className={classes.descriptionBlock}>
                <p>{props.profile?.fullName}</p>
                <p>{props.profile?.aboutMe}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;