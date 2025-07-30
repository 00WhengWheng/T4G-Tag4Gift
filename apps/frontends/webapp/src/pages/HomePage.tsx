
import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, Map, Users, Star, Gift } from 'lucide-react';
import { Button, Card, CardContent, CardHeader, Layout } from '@t4g/ui';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.svg';

const features = [
	{
		icon: Gamepad2,
		title: 'Play Games',
		description: 'Enjoy a variety of fun and challenging games',
		href: '/games',
		color: 'from-blue-500 to-purple-500',
	},
	{
		icon: Trophy,
		title: 'Compete',
		description: 'Climb the leaderboards and show your skills',
		href: '/leaderboard',
		color: 'from-yellow-500 to-orange-500',
	},
	{
		icon: Map,
		title: 'Explore',
		description: 'Discover new locations and challenges',
		href: '/map',
		color: 'from-green-500 to-teal-500',
	},
	{
		icon: Gift,
		title: 'Win Prizes',
		description: 'Earn amazing gifts and rewards',
		href: '/info',
		color: 'from-pink-500 to-red-500',
	},
];

const games = [
	{
		id: '1',
		name: 'Flappy Bird',
		description: 'Navigate through pipes in this classic arcade game',
	},
	{
		id: '2',
		name: 'Music Rhythm',
		description: 'Hit the beats and create amazing music',
	},
	{
		id: '3',
		name: 'Road Cross',
		description: 'Cross the busy road without getting hit',
	},
	{
		id: '4',
		name: 'Shark Frenzy',
		description: 'Survive the shark-infested waters',
	},
];

export default function HomePage() {
  return (
	<Layout>
	  <div className="w-full flex flex-col gap-20 px-4 md:px-8 max-w-7xl mx-auto">
		<Navbar />

		{/* Hero Section */}
		<section className="text-center py-20 md:py-28">
		  <div className="max-w-3xl mx-auto">
			<img
			  src={logo}
			  className="logo react mx-auto mb-10 drop-shadow-xl rounded-2xl border-4 border-brand"
			  alt="Tag4Gift logo"
			/>
			<h1 className="text-6xl md:text-8xl font-display font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-8 tracking-tight">
			  Welcome to <span className="inline-block px-2 py-1 rounded-xl bg-brand text-white shadow">Tag4Gift</span>
			</h1>
			<p className="text-2xl md:text-3xl text-foreground/80 mb-12 leading-relaxed font-sans max-w-2xl mx-auto">
			  Play amazing games, compete with friends, and win incredible Gift prizes in our social gaming platform
			</p>
			<div className="flex flex-col sm:flex-row gap-6 justify-center">
			  <Link to="/games" className="inline-block">
				<Button size="lg" className="rounded-2xl bg-brand text-white font-bold shadow-lg hover:bg-brand-dark transition text-xl px-8 py-4">
				  Start Playing
				</Button>
			  </Link>
			  <Link to="/info" className="inline-block">
				<Button variant="outline" size="lg" className="rounded-2xl border-brand text-brand font-bold hover:bg-brand-light transition text-xl px-8 py-4">
				  Learn More
				</Button>
			  </Link>
			</div>
		  </div>
		</section>

		{/* Features Grid */}
		<section>
		  <h2 className="text-4xl font-display font-black text-center mb-14 text-foreground tracking-tight">
			What You Can Do
		  </h2>
		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
			{features.map((feature) => (
			  <Link key={feature.title} to={feature.href} className="group block">
				<Card className="h-full rounded-2xl shadow-lg border border-muted bg-white group-hover:shadow-2xl group-hover:border-brand transition-all">
				  <CardContent className="p-10 text-center flex flex-col items-center gap-5">
					<div
					  className={`w-20 h-20 mb-3 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}
					>
					  <feature.icon className="w-10 h-10 text-white" />
					</div>
					<h3 className="text-2xl font-bold font-display mb-2 text-foreground group-hover:text-brand transition-colors">
					  {feature.title}
					</h3>
					<p className="text-foreground/70 font-sans text-lg">
					  {feature.description}
					</p>
				  </CardContent>
				</Card>
			  </Link>
			))}
		  </div>
		</section>

		{/* Stats Section */}
		<section className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white shadow-2xl">
		  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
			<div>
			  <div className="text-5xl font-black mb-3 font-display drop-shadow">10K+</div>
			  <div className="text-white/90 font-sans text-lg">Active Players</div>
			</div>
			<div>
			  <div className="text-5xl font-black mb-3 font-display drop-shadow">50+</div>
			  <div className="text-white/90 font-sans text-lg">Games Available</div>
			</div>
			<div>
			  <div className="text-5xl font-black mb-3 font-display drop-shadow">1M+</div>
			  <div className="text-white/90 font-sans text-lg">Prizes Won</div>
			</div>
		  </div>
		</section>

		{/* Games Showcase */}
		<section className="w-full py-16 md:py-24">
		  <div className="mx-auto px-2 max-w-screen-2xl">
			<div className="flex flex-wrap items-center justify-between mb-14 gap-6">
			  <h2 className="font-display text-5xl md:text-6xl font-black text-primary tracking-tight">
				Featured Games
			  </h2>
			  <Link
				to="/games"
				className="px-8 py-3 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-display text-2xl shadow-lg hover:from-primary/80 hover:to-accent/80 transition-all duration-200 border-2 border-accent font-bold"
			  >
				View All
			  </Link>
			</div>
			<div className="grid min-w-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
			  {games.map((game) => (
				<Card
				  key={game.id}
				  className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-10 flex flex-col items-center hover:scale-[1.04] hover:shadow-accent transition-transform duration-200 border-2 border-primary relative overflow-hidden group"
				>
				  <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-full opacity-30 blur-xl z-0" />
				  <h3 className="relative z-10 text-2xl font-black mb-4 text-primary drop-shadow font-display tracking-tight group-hover:text-brand transition-colors">
					{game.name}
				  </h3>
				  <p className="relative z-10 text-lg text-foreground/80 mb-8 text-center leading-relaxed font-sans">
					{game.description}
				  </p>
				  <Link
					to={`/games/${game.id}`}
					className="relative z-10 mt-auto px-8 py-3 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-display text-lg hover:from-primary/80 hover:to-accent/80 transition-colors shadow border-2 border-accent font-bold group-hover:scale-105"
				  >
					Play
				  </Link>
				</Card>
			  ))}
			</div>
		  </div>
		</section>

		{/* Footer */}
		<footer className="w-full py-10 bg-gradient-to-r from-primary via-secondary to-accent text-white text-center font-display text-xl tracking-wide mt-auto rounded-2xl shadow-inner font-bold">
		  &copy; {new Date().getFullYear()} T4G. All rights reserved.
		</footer>
	  </div>
	</Layout>
  );
}
