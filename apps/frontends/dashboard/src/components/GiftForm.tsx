import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_GIFT = gql`
  mutation CreateGift($input: CreateGiftInput!) {
    createGift(input: $input) {
      id
      name
      type
      value
      tenantId
    }
  }
`;

export function GiftForm({ tenantId }: { tenantId: string }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('DRINK');
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState('');
  const [challengeId, setChallengeId] = useState('');
  const [createGift, { data, loading, error }] = useMutation(CREATE_GIFT);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createGift({
      variables: {
        input: {
          name,
          type,
          value: Number(value),
          description,
          tenantId,
          challengeId: challengeId || undefined,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Gift Name" required />
      <select value={type} onChange={e => setType(e.target.value)} required>
        <option value="DRINK">Drink</option>
        <option value="BOTTLE">Bottle</option>
        <option value="DISH">Dish</option>
        <option value="PIZZA">Pizza</option>
        <option value="COFFEE">Coffee</option>
        <option value="DISCOUNT">Discount</option>
      </select>
      <input type="number" value={value} onChange={e => setValue(Number(e.target.value))} placeholder="Value" required />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <input value={challengeId} onChange={e => setChallengeId(e.target.value)} placeholder="Challenge ID (optional)" />
      <button type="submit" disabled={loading}>Create Gift</button>
      {error && <div>Error: {error.message}</div>}
      {data && <div>Gift Created: {data.createGift.name}</div>}
    </form>
  );
}
