import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';


//types of action
const
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
    SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage : {
            posts:  [
                {id: 1, message:'It\'s my first post', likesCount: 10},
                {id: 2, message:'Salo only dlya UKRAINE', likesCount: 6},
                {id: 3, message:'Хочу чтобы тут было пусто', likesCount: 17}
            ],
            newPostText: 'RusBoy'
        },
        
        messagesPage : {
            messageData : [
                {id:1, message:'Hi bro'},
                {id:2, message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, perspiciatis recusandae minima\
                harum repellat praesentium deleniti architecto neque repudiandae, obcaecati sequi in\
                nobis corrupti reprehenderit nulla sed repellendus exercitationem? Dicta.'}
            ],
            
            dialogsData : [
                {id:1, name:'Rusik'},
                {id:2, name:'Cheburec'},
                {id:3, name:'Uzbek'},
                {id:4, name:'CatBoris'}
            ],

            newMessageText: ''
        },

        sidebar: {}
        
    },
    getState() {
        return this._state;
    },
    _rerenderEntireTree(state) {
        console.log('this._state was changed')
    },
    addPost(postMessage) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 12
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch (action) { // action - объект, например {type: 'ADD-NEW-POST-TEXT'}
        this._state.profilePage = profileReducer(action, this._state.profilePage);
        this._state.messagesPage = dialogsReducer(action, this._state.messagesPage)
        this._state.sidebar = sidebarReducer(action, this._state.sidebar);
        this._rerenderEntireTree(this._state);

    }

}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = newText => ({type: UPDATE_NEW_POST_TEXT, newText: newText})


export const updateNewMessageTextActionCreator = newText => ({type: UPDATE_NEW_MESSAGE_BODY, newText: newText});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default store;
window.store = store;