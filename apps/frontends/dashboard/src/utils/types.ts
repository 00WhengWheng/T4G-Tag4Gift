// Type definition for Business App Router
// Import the actual type from the business backend
import type { AppRouterType } from '../../../backends/business/src/app/trpc/app.router';

export type AppRouter = AppRouterType;

export interface Venue {
	id: string;
	name: string;
	address: string;
	latitude: number;
	longitude: number;
	tagCount: number;
	totalScans: number;
	activeUsers: number;
}

export interface UserActivity {
	userId: string;
	userName: string;
	latitude: number;
	longitude: number;
	activity: string;
	timestamp: string;
}

export interface Gift {
	id: string;
	name: string;
	description: string;
	challenge?: Challenge;
	venueId?: string;
	value: number;
	type: string;
}

export interface Challenge {
	id: string;
	title: string;
	description: string;
	entryCost: number;
	prize: string;
	status: string;
	businessId: string;
}

export interface Scan {
	id: string;
	userId: string;
	venueId: string;
	latitude?: number;
	longitude?: number;
	createdAt: string;
}

export interface Tenant {
	id: string;
	name: string;
	venues: Venue[];
}
