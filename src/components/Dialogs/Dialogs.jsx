import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'



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

    let state = props.state;

    const onUpdateNewMessageText = e => props.updateNewMessageText(e.target.value);
    const onSendMessage = e => props.sendMessage();

    let dialogsElements = state.dialogsData.map((el, i) => <DialogItem id={el.id} name={el.name} key={i} />)
    let messageElements = state.messageData.map((el, i) => <Message id={el.id} message={el.message} key={i}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.currentDialog}>
                {messageElements}
                <textarea onChange={onUpdateNewMessageText} cols="40" rows="7" value={state.newMessageText}/>
                <button onClick={onSendMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;