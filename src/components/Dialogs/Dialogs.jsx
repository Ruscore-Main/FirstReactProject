import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/store';



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
    const updateNewMessageText = e => props.dispatch(updateNewMessageTextActionCreator(e.target.value));
    const sendMessage = e => props.dispatch(sendMessageActionCreator());

    let dialogsElements = props.dialogsData.map((el, i) => <DialogItem id={el.id} name={el.name} key={i} />)
    let messageElements = props.messageData.map((el, i) => <Message id={el.id} message={el.message} key={i}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.currentDialog}>
                {messageElements}
                <textarea onChange={updateNewMessageText} cols="40" rows="7" value={props.newMessageText}/>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;