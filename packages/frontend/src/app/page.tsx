"use client";

import { handleClick } from "@/actions/example";

export default function Home() {
  return (
    <div>
      <button onClick={() => handleClick().then(JSON.stringify).then(alert)}>
        {Home.name}
      </button>
    </div>
  );
}
