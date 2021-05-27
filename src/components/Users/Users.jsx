import React from 'react';
import userPhoto from './../../assets/images/user.jpg';
import styles from './users.module.css';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

const Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                pages.map(p => {
                    return <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && styles.selectedPage}>{p}</span>
                })
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`profile/${u.id}`}><img src={u.photos.small || userPhoto} className={styles.userPhoto} /></NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true, 
                                    headers: {
                                        'API-KEY': '9f76f104-e9d8-4d12-bb48-6ce541988381'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                })

                            }}>unfollow</button>
                            :
                            <button onClick={() =>{

                                axios
                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '9f76f104-e9d8-4d12-bb48-6ce541988381'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                })
                            
                            }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}

export default Users;