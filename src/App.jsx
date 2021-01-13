import Header from "./Header";
import Technologies from './Technologies'
import './App.css';

function App() {
  return (
  <div className='container'>
    <header>
      <span>fadfafa</span>
      <span>fsfadf</span>
      <span>fdsaf</span>
      <span>fdafd</span>
      <div className="img">
      <img src="https://st2.depositphotos.com/3096625/8799/v/600/depositphotos_87990570-stock-illustration-letter-r-logo-monogram.jpg" alt="logo"/>
      <span>
        Rnet
      </span>
      </div>
    </header>
    <div className="content">
    <nav>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
      </ul>
    </nav>
    <main>
      Main contentProfile
    </main>
    </div>
    {/* <Header />
    <Technologies /> */}
  </div>
  );
}

export default App;
