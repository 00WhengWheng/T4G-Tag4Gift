import * as React from "react";

export interface LayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
}

export function Layout({ children, sidebar, header }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-brand-light to-accent/10 text-foreground flex flex-col">
      {/* Header */}
      {header && (
        <header className="w-full shadow-sm bg-white/80 backdrop-blur sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
            {header}
          </div>
        </header>
      )}
      <div className="flex flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 gap-8">
        {/* Sidebar */}
        {sidebar && (
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-24">{sidebar}</div>
          </aside>
        )}
        {/* Main Content */}
        <main className="flex-1 min-w-0 flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}


