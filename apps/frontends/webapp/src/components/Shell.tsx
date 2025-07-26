import { Outlet, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

import React from 'react';

type ShellProps = {
  children?: React.ReactNode;
};

export default function Shell({ children }: ShellProps) {
    return (
        <>
            <header className="navbar bg-base-200 px-4">
                <div className="flex-1 font-bold text-lg">Tag4Gift</div>
                <ThemeToggle />
            </header>
            <nav className="flex gap-4">
                <Link to="/challenges" className="btn btn-sm btn-ghost">Challenges</Link>
                <Link to="/profile" className="btn btn-sm btn-ghost">Profile</Link>
                <Link to="/map" className="btn btn-sm btn-ghost">Map</Link>
            </nav>
            <main className="p-4">
                {children}
            </main>
        </>
    );
}