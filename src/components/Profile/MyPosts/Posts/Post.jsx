import React from 'react'
import classes from './Post.module.css'

const Post = props => {
    return (
        <div className={classes.item}>
            <div className={classes.itemContent}>
                <img src="https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg" alt="" />
                {props.message}
            </div>
            <span>like</span>
        </div>

    );
}

export default Post;