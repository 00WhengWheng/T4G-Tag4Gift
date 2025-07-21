// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import GameTestPage from '../pages/GameTestPage';

export function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <ul>
            <li><Link to="/game-test">Game Test</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/game-test" element={<GameTestPage />} />
          <Route path="/" element={<Navigate to="/game-test" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
