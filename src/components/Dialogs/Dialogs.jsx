import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';



const DialogItem = props => {
    return (
        <div className={classes.dialogItem}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = props => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

const Dialogs = props => {
    let state = props.store.getState().dialogsPage;
    const updateNewMessageText = e => props.store.dispatch(updateNewMessageTextActionCreator(e.target.value));
    const sendMessage = e => props.store.dispatch(sendMessageActionCreator());

    let dialogsElements = state.dialogsData.map((el, i) => <DialogItem id={el.id} name={el.name} key={i} />)
    let messageElements = state.messageData.map((el, i) => <Message id={el.id} message={el.message} key={i}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.currentDialog}>
                {messageElements}
                <textarea onChange={updateNewMessageText} cols="40" rows="7" value={state.newMessageText}/>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;