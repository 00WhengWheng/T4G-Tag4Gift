import { QuizGame } from '../components/QuizGame';

const QuizPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '3rem auto', padding: '2rem', background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px #0001' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Quiz Master</h1>
      <p style={{ color: '#555', fontSize: '1.1em', marginBottom: '2rem', textAlign: 'center' }}>
        Test your knowledge with fun quizzes!
      </p>
      <QuizGame />
    </div>
  );
};

export default QuizPage;
