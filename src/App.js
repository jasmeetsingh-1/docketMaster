import './App.css';
import Home from './components/pages/home/home';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <div className='home-page-left-section'>
        <Sidebar/>
      </div>
      <div className="home-page-middle-section">
      <Home/>
      </div>
      <div className="home-page-right-section">Right</div>
    </div>
  );
}

export default App;
