const
    UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
    SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (action, state) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageText = action.newText;
            break;
        }

        case SEND_MESSAGE: {
            let newMessage = {id: 5, message: state.newMessageText}
            state.newMessageText = '';
            state.messageData.push(newMessage);
            break;
        }
        
    }

    return state;
}

export default dialogsReducer;