import React from "react";

export default function Debug({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
