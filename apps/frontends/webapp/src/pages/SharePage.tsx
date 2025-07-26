import React, { useState } from 'react';

type ShareType = 'photo' | 'video' | 'gift';

interface Venue {
    name: string;
    instagram?: string;
    facebook?: string;
}

const venues: Venue[] = [
    {
        name: 'Coffee House',
        instagram: 'coffeehouse_insta',
        facebook: 'coffeehouse_fb',
    },
    {
        name: 'Book Store',
        instagram: 'bookstore_insta',
        facebook: 'bookstore_fb',
    },
];

export default function SharePage() {
    const [shareType, setShareType] = useState<ShareType>('photo');
    const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
    const [content, setContent] = useState<File | null>(null);

    const handleVenueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const venue = venues.find(v => v.name === e.target.value) || null;
        setSelectedVenue(venue);
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setShareType(e.target.value as ShareType);
        setContent(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setContent(e.target.files[0]);
        }
    };

    const handleShare = () => {
        // Placeholder for share logic (e.g., API call)
        alert(
            `Shared a ${shareType} to ${selectedVenue?.name}!\n` +
            `Instagram: ${selectedVenue?.instagram}\n` +
            `Facebook: ${selectedVenue?.facebook}`
        );
    };

    return (
        <div style={{ maxWidth: 400, margin: '2rem auto', padding: 16 }}>
            <h2>Share Content</h2>
            <label>
                Select Venue/Store:
                <select value={selectedVenue?.name || ''} onChange={handleVenueChange}>
                    <option value="" disabled>Select venue</option>
                    {venues.map(v => (
                        <option key={v.name} value={v.name}>{v.name}</option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Share Type:
                <select value={shareType} onChange={handleTypeChange}>
                    <option value="photo">Photo</option>
                    <option value="video">Video</option>
                    <option value="gift">Gift</option>
                </select>
            </label>
            <br />
            {(shareType === 'photo' || shareType === 'video') && (
                <label>
                    Upload {shareType}:
                    <input type="file" accept={shareType === 'photo' ? 'image/*' : 'video/*'} onChange={handleFileChange} />
                </label>
            )}
            {shareType === 'gift' && (
                <label>
                    Gift Description:
                    <input type="text" placeholder="Describe your gift" onChange={e => setContent(new File([e.target.value], 'gift.txt'))} />
                </label>
            )}
            <br />
            <button
                disabled={!selectedVenue || !content}
                onClick={handleShare}
                style={{ marginTop: 16 }}
            >
                Share to Social Page
            </button>
            {selectedVenue && (
                <div style={{ marginTop: 24 }}>
                    <h4>Venue Social Accounts</h4>
                    {selectedVenue.instagram && (
                        <div>
                            Instagram: <a href={`https://instagram.com/${selectedVenue.instagram}`} target="_blank" rel="noopener noreferrer">@{selectedVenue.instagram}</a>
                        </div>
                    )}
                    {selectedVenue.facebook && (
                        <div>
                            Facebook: <a href={`https://facebook.com/${selectedVenue.facebook}`} target="_blank" rel="noopener noreferrer">{selectedVenue.facebook}</a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}