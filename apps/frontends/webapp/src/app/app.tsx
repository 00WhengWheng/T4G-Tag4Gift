// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamesPage from '../pages/GamesPage';
import QuizPage from '../pages/QuizPage';
import HomePage from '../pages/HomePage';

export function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
