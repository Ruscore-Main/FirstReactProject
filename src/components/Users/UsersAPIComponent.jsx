import React, { Component } from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.jpg';
import loader from './../../assets/images/loader.svg';
import Users from './Users';
import Loader from '../Loader/Loader';
import { usersAPI } from '../../api/api';



class UsersAPIComponent extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = page => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize)
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