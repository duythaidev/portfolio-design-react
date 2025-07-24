import Main from '../component/Main/Main'
import Profile from '../component/Profile/Profile';
import './App.scss';


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
