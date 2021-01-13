import Header from "./Header";
import Technologies from './Technologies'
import './App.css';

function App() {
  return (
  <div className='container'>
    <header>
      <img src="https://st2.depositphotos.com/3096625/8799/v/600/depositphotos_87990570-stock-illustration-letter-r-logo-monogram.jpg" alt="logo"/>
    </header>
    <nav>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
      </ul>
    </nav>
    <main>
      Main content
    </main>
    {/* <Header />
    <Technologies /> */}
  </div>
  );
}

export default App;
