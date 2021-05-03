import React, { Component } from 'react';
import styles from './users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.jpg'
class Users extends Component {

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            })
    }

    onPageChanged = page => {
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span onClick={()=>this.onPageChanged(p)} className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                        })
                    }
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small || userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>follow</button>}
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
        )
    }

}

export default Users;