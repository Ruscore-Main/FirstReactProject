import axios from 'axios';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setAuthUserDataAC } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {

    componentDidMount () {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode == 0) {
                    let {id: userId, login, email} = response.data.data;
                    this.props.setAuthUserData(userId, email, login)
                }
            })
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
    setAuthUserData: setAuthUserDataAC
})(HeaderContainer);