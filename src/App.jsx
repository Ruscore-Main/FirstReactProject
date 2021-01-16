import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className="content">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
