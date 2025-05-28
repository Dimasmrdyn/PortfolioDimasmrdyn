import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AbotPage.jsx';
import Navbar from './components/Navbar.jsx';
import Exprience from './pages/Exprerience.jsx';
import MainSkills from './pages/MainSkills.jsx';
import Projects from './pages/Projects.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<Exprience />} />
        <Route path="/skills" element={<MainSkills />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
