const
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:  [
        {id: 1, message:'It\'s my first post', likesCount: 10},
        {id: 2, message:'Salo only dlya UKRAINE', likesCount: 6},
        {id: 3, message:'Хочу чтобы тут было пусто', likesCount: 17}
    ],
    newPostText: 'RusBoy'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;