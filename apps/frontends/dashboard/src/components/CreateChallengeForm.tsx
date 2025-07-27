import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const CREATE_CHALLENGE = gql`
  mutation CreateChallenge($input: CreateChallengeInput!) {
    createChallenge(input: $input) {
      id
      name
      participants
      game { id type }
      gift { id name }
    }
  }
`;

export function CreateChallengeForm() {
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');
  const [giftId, setGiftId] = useState('');
  const [participants, setParticipants] = useState('');
  const [createChallenge, { data, loading, error }] = useMutation(CREATE_CHALLENGE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createChallenge({
      variables: {
        input: {
          name,
          gameId,
          giftId,
          participantIds: participants.split(',').map(p => p.trim()),
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Challenge Name" required />
      <input value={gameId} onChange={e => setGameId(e.target.value)} placeholder="Game ID" required />
      <input value={giftId} onChange={e => setGiftId(e.target.value)} placeholder="Gift ID" required />
      <input value={participants} onChange={e => setParticipants(e.target.value)} placeholder="Participant IDs (comma separated)" required />
      <button type="submit" disabled={loading}>Create Challenge</button>
      {error && <div>Error: {error.message}</div>}
      {data && <div>Created Challenge ID: {data.createChallenge.id}</div>}
    </form>
  );
}
