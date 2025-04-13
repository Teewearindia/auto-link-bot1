import React from "react";

export function Card({ children, ...props }) {
  return (
    <div className="bg-white shadow-md rounded p-4" {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}
