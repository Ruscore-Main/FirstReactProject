import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = props => {
    return (
        <div>
            <img src={props.profile?.photos.large || "https://png.pngtree.com/thumb_back/fw800/background/20190827/pngtree-retro-futuristic-1980s-style-mountain-landscape-background-image_302222.jpg"} alt="" />
            <div className={classes.descriptionBlock}>
                <p>{props.profile?.fullName}</p>
                <p>{props.profile?.aboutMe}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;