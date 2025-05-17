import React from 'react';
import { cn } from "@/lib/utils";

export const Card = ({ children, className, ...props }) => {
  return (
    <div className={cn("p-4 shadow-md rounded-lg bg-white", className)} {...props}>
      {children}
    </div>
  );
};
