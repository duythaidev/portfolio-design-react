import logo from '../assets/logo.svg';
import './App.scss';
import About from '../component/About/About'
import Profile from '../component/Profile/Profile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile></Profile>
        <About></About>

      </header>
    </div>
  );
}

export default App;
