// Uncomment this line to use CSS modules
// import styles from './app.module.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamesPage from '../pages/GamesPage';
import QuizPage from '../pages/QuizPage';
import HomePage from '../pages/HomePage';
import Layout from './Layout';


export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/quiz" element={<QuizPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
