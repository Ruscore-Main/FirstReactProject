import React from 'react'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/store';
import classes from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPost = (props) => {
    let newPostElement = React.createRef();
    
    const onAddPost = () => {
        props.addPost()
    }
    
    const onPostChange = e => {
        props.updateNewPostText(e.target.value);
    }

    let postselements = props.profilePosts.map((el, i) => <Post id = {el.id} message={el.message} likesCount={el.likesCount} key={i}/>)
    return (
        <div className={classes.postsBlock}>
            My posts:
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                </div>
                <button onClick={onAddPost}>Submit</button>
                </div>
            <div className='posts'>
                {postselements}
            </div>
        </div>
    );
}

export default MyPost;