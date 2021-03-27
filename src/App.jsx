import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';


function App(props) {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <div className="app-wrapper">
          <Navbar />
          <div className='app-wrapper-content'>
            <Route exact path='/profile' render={() => <Profile profilePosts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch}/>} />
            <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.messagesPage.dialogsData} messageData={props.state.messagesPage.messageData}/>} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
