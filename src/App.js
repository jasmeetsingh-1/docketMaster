import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./components/pages/home";
import ProjectPage from './components/pages/project';
import PageNotFound from './components/error404/errorPage';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path="/home" element={<Home/> }/>
          <Route exact path="/project" element={<ProjectPage/> }/>
          <Route path='*' element={<PageNotFound/>}/>
       </Routes>
    </div>
  );
}

export default App;