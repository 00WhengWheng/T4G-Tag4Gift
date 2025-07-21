// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import GamesPage from '../pages/GamesPage';
import QuizPage from '../pages/QuizPage';

export function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <ul>
          <li><Link to="/games">Games</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/quiz" element={<QuizPage />} />
          <Route path="/" element={<Navigate to="/games" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
