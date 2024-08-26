import logo from '../assets/logo.svg';
import './App.scss';
import Main from '../component/Main/Main'
import Profile from '../component/Profile/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile></Profile>
        <Main></Main>
      </header>
    </div>
  );
}

export default App;
