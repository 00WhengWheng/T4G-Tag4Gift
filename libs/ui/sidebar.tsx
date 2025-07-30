import * as React from "react";
import { cn } from "./utils";

const Sidebar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <aside
      className={cn(
        "flex flex-col w-64 h-full bg-muted border-r border-border p-4 space-y-4",
        className
      )}
      {...props}
    >
      <div className="font-bold text-lg mb-4">Tag4Gift</div>
      <nav className="flex flex-col gap-2">
        <a href="/" className="hover:bg-accent rounded px-2 py-1">Home</a>
        <a href="/about" className="hover:bg-accent rounded px-2 py-1">About</a>
        {/* Add more links as needed */}
      </nav>
    </aside>
  );
};

export default Sidebar;
export { Sidebar };
