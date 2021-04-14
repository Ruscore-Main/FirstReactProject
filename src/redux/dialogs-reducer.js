const
    UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
    SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            state.newMessageText = action.newText;
            return state;

        case SEND_MESSAGE: 
            let newMessage = {id: 5, message: state.newMessageText}
            state.newMessageText = '';
            state.messageData.push(newMessage);
            return state;
            
        default:
            return state;
        
    }

}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (newText) => ({ type: UPDATE_NEW_MESSAGE_BODY, newText: newText })


export default dialogsReducer;