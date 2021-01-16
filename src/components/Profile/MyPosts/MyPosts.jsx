import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPost = () => {
    return (
        <div>
            My posts:
            <div>
                <textarea></textarea>
                <button>Submit</button>
                </div>
            <div className='posts'>
                <Post message={'It\'s my first post'}/>
                <Post message='Salo only dlya UKRAINE'/>
                <Post message='Хочу чтобы тут было пусто'/>
            </div>
        </div>
    );
}

export default MyPost;