import { Profiler } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <div className="app-wrapper">
          <Navbar />
          <div className='app-wrapper-content'>
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/dialogs' component={Dialogs} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
