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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem id='1' name='Rusik' />
                <DialogItem id='2' name='Cheburec' />
                <DialogItem id='3' name='Uzbek' />
                <DialogItem id='4' name='CatBoris' />
            </div>
            <div className={classes.currentDialog}>
                <Message message='Hi bro' />
                <Message message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum aliquam porro exercitationem provident explicabo maiores 
                quibusdam quae accusantium, optio rerum quis repudiandae quidem iste illum ipsum reiciendis ipsam quas quaerat.'/>
            </div>
        </div>
    );
}

export default Dialogs;