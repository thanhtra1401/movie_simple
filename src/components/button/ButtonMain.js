import React from "react";

export default function ButtonMain({
  children,
  full = false,
  bgColor = "bg-primary",
  className,
  ...props
}) {
  return (
    <button
      className={`py-3 px-6 rounded-lg capitalize mt-auto ${
        full ? "w-full" : ""
      } ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
