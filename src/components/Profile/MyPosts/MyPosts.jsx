import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPost = (props) => {

    let newPostElement = React.createRef();
    const addPost = () => {
        props.addPost(newPostElement.current?.value);
    }

    let postselements = props.profilePosts.map((el, i) => <Post id = {el.id} message={el.message} likesCount={el.likesCount} key={i}/>)
    return (
        <div className={classes.postsBlock}>
            My posts:
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost}>Submit</button>
                </div>
            <div className='posts'>
                {postselements}
            </div>
        </div>
    );
}

export default MyPost;