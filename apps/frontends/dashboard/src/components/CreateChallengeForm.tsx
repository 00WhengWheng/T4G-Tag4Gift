import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_CHALLENGE = gql`
  mutation CreateChallenge($input: CreateChallengeInput!) {
    createChallenge(input: $input) {
      id
      name
      description
      gift { id name }
      startDate
      endDate
    }
  }
`;

export function CreateChallengeForm({ tenantId }: { tenantId: string }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [giftId, setGiftId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [createChallenge, { data, loading, error }] = useMutation(CREATE_CHALLENGE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createChallenge({
      variables: {
        input: {
          name,
          description,
          giftId,
          tenantId,
          startDate,
          endDate,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Challenge Name" required />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <input value={giftId} onChange={e => setGiftId(e.target.value)} placeholder="Gift ID (required)" required />
      <input type="datetime-local" value={startDate} onChange={e => setStartDate(e.target.value)} placeholder="Start Date" required />
      <input type="datetime-local" value={endDate} onChange={e => setEndDate(e.target.value)} placeholder="End Date" required />
      <button type="submit" disabled={loading}>Create Challenge</button>
      {error && <div>Error: {error.message}</div>}
      {data && <div>Challenge Created: {data.createChallenge.name}</div>}
    </form>
  );
}
