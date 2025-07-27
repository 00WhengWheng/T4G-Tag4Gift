import { useState } from 'react';

export function GiftsChallenges() {
  const [showGiftForm, setShowGiftForm] = useState(false);
  const [showChallengeForm, setShowChallengeForm] = useState(false);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Gifts & Challenges</h2>
      <div className="mb-6 flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setShowGiftForm((v) => !v)}
        >
          {showGiftForm ? 'Hide Gift Form' : 'Set a Gift'}
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setShowChallengeForm((v) => !v)}
        >
          {showChallengeForm ? 'Hide Challenge Form' : 'Set a Challenge'}
        </button>
      </div>
      {showGiftForm && <GiftForm />}
      {showChallengeForm && <ChallengeForm />}
      <div className="text-gray-600 mt-8">Here you can manage and view all gifts and challenges. (Integrate with backend as needed)</div>
      {/* TODO: Add gift/challenge list, creation forms, etc. */}
    </div>
  );
}

function GiftForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('DRINK');
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend mutation
    alert(`Gift created: ${name} (${type}) - $${value}`);
  };

  return (
    <form className="mb-6 p-4 bg-blue-50 rounded" onSubmit={handleSubmit}>
      <h3 className="font-semibold mb-2">Create Gift</h3>
      <input className="border p-2 mb-2 w-full" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <select className="border p-2 mb-2 w-full" value={type} onChange={e => setType(e.target.value)}>
        <option value="DRINK">Drink</option>
        <option value="BOTTLE">Bottle</option>
        <option value="DISH">Dish</option>
        <option value="PIZZA">Pizza</option>
        <option value="COFFEE">Coffee</option>
        <option value="DISCOUNT">Discount</option>
      </select>
      <input className="border p-2 mb-2 w-full" type="number" placeholder="Value" value={value} onChange={e => setValue(Number(e.target.value))} />
      <textarea className="border p-2 mb-2 w-full" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">Create Gift</button>
    </form>
  );
}

function ChallengeForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [giftId, setGiftId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend mutation
    alert(`Challenge created: ${name} (Gift: ${giftId})`);
  };

  return (
    <form className="mb-6 p-4 bg-green-50 rounded" onSubmit={handleSubmit}>
      <h3 className="font-semibold mb-2">Create Challenge</h3>
      <input className="border p-2 mb-2 w-full" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <textarea className="border p-2 mb-2 w-full" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input className="border p-2 mb-2 w-full" placeholder="Gift ID" value={giftId} onChange={e => setGiftId(e.target.value)} />
      <input className="border p-2 mb-2 w-full" type="date" placeholder="Start Date" value={startDate} onChange={e => setStartDate(e.target.value)} />
      <input className="border p-2 mb-2 w-full" type="date" placeholder="End Date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      <button className="px-4 py-2 bg-green-500 text-white rounded" type="submit">Create Challenge</button>
    </form>
  );
}
