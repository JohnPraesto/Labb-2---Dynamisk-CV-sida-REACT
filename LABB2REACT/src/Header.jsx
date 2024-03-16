import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import './Header.css'

function Header(){
    return(
    <HashRouter>

      <div className="link-container">
          <Link to="/home" className="link-item1">Home</Link>
          <Link to="/projects" className="link-item2">Projects</Link>
      </div>

      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </HashRouter>
    );
}

export default Header