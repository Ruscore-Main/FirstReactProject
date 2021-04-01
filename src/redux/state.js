// types of actions 
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
        }
        
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

    dispatch (action) { // {type: 'ADD-POST'} - приходит объект
        switch (action.type) {
            case ADD_POST : {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 12
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = '';
                this._rerenderEntireTree(this._state);
                break;
            }

            case UPDATE_NEW_POST_TEXT: {
                this._state.profilePage.newPostText = action.newText;
                this._rerenderEntireTree(this._state);
                break;
            }

            case UPDATE_NEW_MESSAGE_BODY: {
                this._state.messagesPage.newMessageText = action.newText;
                this._rerenderEntireTree(this._state);
                break;
            }

            case SEND_MESSAGE: {
                let newMessage = {id: 5, message: this._state.messagesPage.newMessageText}
                this._state.messagesPage.newMessageText = '';
                this._state.messagesPage.messageData.push(newMessage);
                this._rerenderEntireTree(this._state);
                break;
            }
            
        }

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