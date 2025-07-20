// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import GameTestPage from '../pages/GameTestPage';

export function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/game-test">Game Test</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<NxWelcome title="T4G-Tag4Gift" />} />
          <Route path="/game-test" element={<GameTestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
