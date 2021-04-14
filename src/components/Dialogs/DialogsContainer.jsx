import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import Dialogs from './Dialogs'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';



const DialogsContainer = props => {
    let state = props.store.getState().dialogsPage;

    const updateNewMessageText = newText => props.store.dispatch(updateNewMessageTextActionCreator(newText));

    const sendMessage = e => props.store.dispatch(sendMessageActionCreator());

    return <Dialogs updateNewMessageText={updateNewMessageText} sendMessage={sendMessage} state={state} />
}

export default DialogsContainer;