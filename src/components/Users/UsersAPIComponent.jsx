import React, { Component } from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.jpg';
import loader from './../../assets/images/loader.svg';
import Users from './Users';
import Loader from '../Loader/Loader';



class UsersAPIComponent extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.getUsers();
    }

    getUsers = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            })
    }

    onPageChanged = page => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
        {this.props.isFetching ? <Loader /> : 
        
        <Users
                users = {this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        
        }
            
        </>
    }

}

export default UsersAPIComponent;