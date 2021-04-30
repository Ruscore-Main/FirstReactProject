import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import Dialogs from './Dialogs'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';


let mapStateToProps = state => {
    return {
        state: state.dialogsPage
    }
}

let mapDispatchToPros = dispatch => {
    return {
        updateNewMessageText: (newText) => {
            dispatch(updateNewMessageTextActionCreator(newText))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToPros)(Dialogs);

export default DialogsContainer;