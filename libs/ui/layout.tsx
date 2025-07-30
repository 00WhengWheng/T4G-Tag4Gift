import React from "react";
import { Sidebar } from "./components/ui/sidebar";
import { ThemeProvider } from "./components/ui/theme-provider";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <main className="flex-1 p-8 flex flex-col items-center justify-center">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
