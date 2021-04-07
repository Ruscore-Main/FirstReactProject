const
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (action, state) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12
            }
            state.posts.push(newPost)
            state.newPostText = '';
            break;
        }

        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            break;
        }
        
    }
    return state;
}

export default profileReducer;