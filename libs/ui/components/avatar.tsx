import * as React from "react";
import { cn } from "../utils";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(({ className, fallback, ...props }, ref) => {
  return (
    <span className={cn("inline-block rounded-full overflow-hidden bg-muted", className)}>
      <img ref={ref} className="object-cover w-full h-full" {...props} />
      {(!props.src || props.src === "") && fallback}
    </span>
  );
});
Avatar.displayName = "Avatar";

export { Avatar };
