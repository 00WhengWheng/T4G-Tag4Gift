import { useState } from 'react';

const mockUser = {
  avatar: 'https://i.pravatar.cc/100',
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe@example.com',
  username: 'janedoe',
  phone: '+1234567890',
  role: 'TENANT',
};

export function ProfileSection() {
  const [user, setUser] = useState(mockUser);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(user);

  const handleEdit = () => {
    setEditing(true);
    setForm(user);
  };

  const handleCancel = () => {
    setEditing(false);
    setForm(user);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(form);
    setEditing(false);
    // TODO: Integrate with backend mutation
    alert('Profile updated!');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="flex items-center mb-6">
        <img src={user.avatar} alt="avatar" className="w-20 h-20 rounded-full mr-4" />
        <div>
          <div className="font-semibold text-lg">{user.firstName} {user.lastName}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
          <div className="text-xs text-gray-400">Username: {user.username}</div>
          <div className="text-xs text-gray-400">Role: {user.role}</div>
        </div>
      </div>
      {editing ? (
        <form className="bg-gray-50 p-4 rounded" onSubmit={handleSave}>
          <input className="border p-2 mb-2 w-full" placeholder="First Name" value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} />
          <input className="border p-2 mb-2 w-full" placeholder="Last Name" value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
          <input className="border p-2 mb-2 w-full" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          <input className="border p-2 mb-2 w-full" placeholder="Username" value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))} />
          <input className="border p-2 mb-2 w-full" placeholder="Phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
          <div className="flex gap-2 mt-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded" type="submit">Save</button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded" type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      ) : (
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleEdit}>Edit Profile</button>
      )}
    </div>
  );
}
