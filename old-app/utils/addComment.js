import { VITE_MAIN_API } from "../data/data";

export default async (feedback) => {
  const url = `${VITE_MAIN_API}/feedback`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ feedback }),
  });

  const data = await res.json()
  return data
};
