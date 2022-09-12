import React from "react";

export default function Button({ label }) {
  return (
    <button
      className="bg-red-400 p-4 rounded-xl font-bold text-white hover:scale-110"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
    >
      {label}
    </button>
  );
}
