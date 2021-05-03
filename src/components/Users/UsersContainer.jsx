import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        follow: usersId => {
            dispatch(followAC(usersId))
        },
        unfollow: usersId => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: currentPage => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: totalCount => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;