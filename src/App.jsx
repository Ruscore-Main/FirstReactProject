import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import React from 'react';
import UsersContainer from './components/Users/UsersContainer';


const App = props => {
  return (
    <div className='container'>
      <Header />
      <div className="app-wrapper">
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer/>} />
          <Route path='/profile' render={() => <ProfileContainer />} />
          <Route path='/users' render={()=><UsersContainer />}/>
        </div>
      </div>
    </div>
  );
}

export default App;
