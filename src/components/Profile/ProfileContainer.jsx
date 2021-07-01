import React, {Component} from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {getProfileThunkCreator, setUserProfileAC} from './../../redux/profile-reducer'
import { withRouter } from 'react-router';
import { usersAPI } from '../../api/api';

class ProfileContainer extends Component {

    componentDidMount () {
        let {userId} = this.props.match.params;
        if (!userId) {
            userId = 2
        }
        this.props.setUserProfile(userId)
        
    }

    
    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {
    setUserProfile: getProfileThunkCreator
})(WithUrlDataContainerComponent);
