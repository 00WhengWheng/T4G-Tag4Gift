import React, { useEffect, useState } from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardTitle,
	CardDescription
} from '../components/ui/card';
import { Button } from '../components/ui/button';

interface Gift {
	id: string;
	name: string;
	description?: string;
	imageUrl?: string;
	giftType: string;
	value?: string;
	status: string;
	expiresAt?: string;
}

const GiftsPage: React.FC = () => {
	const [gifts, setGifts] = useState<Gift[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchGifts = async () => {
			setIsLoading(true);
			try {
				const res = await fetch('/api/gifts');
				const data = await res.json();
				setGifts(data.gifts || []);
			} catch (err) {
				setError('Failed to load gifts');
			} finally {
				setIsLoading(false);
			}
		};
		fetchGifts();
	}, []);

	if (isLoading) return <div className="text-center py-8">Loading gifts...</div>;
	if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
			<h1 className="text-3xl font-bold text-center mb-8">Your Gifts</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{gifts.length === 0 ? (
					<div className="col-span-full text-center text-gray-500">No gifts found.</div>
				) : (
					gifts.map(gift => (
						<Card key={gift.id} className="rounded-xl shadow-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900 flex flex-col h-full overflow-hidden transition-all duration-300">
							<CardHeader className="p-0">
								<div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-t-xl flex items-center justify-center relative overflow-hidden">
									{gift.imageUrl && (
										<img
											src={gift.imageUrl}
											alt={gift.name}
											className="absolute inset-0 w-full h-full object-cover"
											onError={e => { e.currentTarget.style.display = 'none'; }}
										/>
									)}
									<div className="absolute inset-0 bg-black/20 transition-colors"></div>
									<div className="relative z-10 text-center text-white">
										<div className="text-4xl mb-2 drop-shadow-lg">🎁</div>
									</div>
									<div className="absolute top-4 right-4">
										<span className="px-2 py-1 text-xs rounded bg-blue-600 text-white">{gift.giftType}</span>
									</div>
								</div>
							</CardHeader>
							<CardContent className="flex-1 flex flex-col p-6">
								<CardTitle>{gift.name}</CardTitle>
								<CardDescription className="mb-2">{gift.description}</CardDescription>
								<div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
									<span>Status: {gift.status}</span>
									{gift.value && <span>Value: {gift.value}</span>}
								</div>
								{gift.expiresAt && (
									<div className="text-xs text-red-500 mt-2">Expires: {new Date(gift.expiresAt).toLocaleDateString()}</div>
								)}
							</CardContent>
							<CardFooter className="p-6 pt-0">
								<Button className="w-full rounded-xl font-bold text-lg" variant="default" disabled={gift.status !== 'AVAILABLE'}>
									{gift.status === 'AVAILABLE' ? 'Claim Gift' : 'Unavailable'}
								</Button>
							</CardFooter>
						</Card>
					))
				)}
			</div>
		</div>
	);
};

export default GiftsPage;
