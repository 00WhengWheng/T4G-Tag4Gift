import * as React from "react";
import { Card } from "@t4g/ui";
import { motion } from "framer-motion";

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
        <header className="w-full shadow-lg bg-white/70 backdrop-blur-md sticky top-0 z-30 rounded-b-2xl border-b border-accent/20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
            {header}
          </div>
        </header>
      )}
      <div className="flex flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 gap-8">
        {/* Sidebar */}
        {sidebar && (
          <aside className="hidden md:block w-64 shrink-0">
            <motion.div
              className="sticky top-24"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.25 }}
            >
              <Card className="bg-white/60 dark:bg-gray-900/60 shadow-xl border-none backdrop-blur-lg p-6 rounded-2xl">
                {sidebar}
              </Card>
            </motion.div>
          </aside>
        )}
        {/* Main Content */}
        <main className="flex-1 min-w-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.18 }}
            className="w-full max-w-3xl"
          >
            <Card className="bg-white/80 dark:bg-gray-900/80 shadow-2xl border-none backdrop-blur-2xl p-10 rounded-3xl glassmorphism">
              {children}
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  );
}


