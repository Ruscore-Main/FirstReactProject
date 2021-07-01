import React from 'react';
import { connect } from 'react-redux';
import { followThunkCreator, getUsersThunkCreator, setCurrentPageAC, unfollowAC, unfollowThunkCreator } from '../../redux/users-reducer';
import UsersAPIComponent from './UsersAPIComponent';

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersThunkCreator
})(UsersAPIComponent);
export default UsersContainer;