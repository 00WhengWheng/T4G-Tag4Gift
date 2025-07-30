import * as React from "react";
import { cn } from "../utils";

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn("relative w-full rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive", className)} {...props} />
  )
);
Alert.displayName = "Alert";

export { Alert };
