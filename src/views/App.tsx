import Main from '../component/Main/Main'
import Profile from '../component/Profile/Profile';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

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
