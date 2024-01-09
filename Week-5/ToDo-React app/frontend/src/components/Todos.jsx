import React from "react";

export function Todos({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
