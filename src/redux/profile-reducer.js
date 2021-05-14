const
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts:  [
        {id: 1, message:'It\'s my first post', likesCount: 10},
        {id: 2, message:'Salo only dlya UKRAINE', likesCount: 6},
        {id: 3, message:'Хочу чтобы тут было пусто', likesCount: 17}
    ],
    newPostText: 'RusBoy',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfileAC = profile => ({type: SET_USER_PROFILE, profile})
export default profileReducer;