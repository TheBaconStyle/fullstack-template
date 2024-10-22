"use server";

import { functional } from "sdk";

export async function handleClick() {
  const qwe = await functional.getHello({ host: "http://localhost:5000" });

  if (!qwe.success || qwe.status !== 200) {
    return {};
  }

  return qwe.data;
}
