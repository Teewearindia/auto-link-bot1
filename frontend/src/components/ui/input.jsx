import React from "react";

export function Input({ ...props }) {
  return (
    <input
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
      {...props}
    />
  );
}
