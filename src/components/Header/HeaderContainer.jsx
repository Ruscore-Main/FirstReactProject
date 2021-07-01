import axios from 'axios';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { getMeThunk, setAuthUserDataAC } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {

    componentDidMount () {
        this.props.setAuthUserData();
    }

    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {
    setAuthUserData: getMeThunk
})(HeaderContainer);