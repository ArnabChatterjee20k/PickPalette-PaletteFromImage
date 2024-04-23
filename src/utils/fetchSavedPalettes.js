import { SUPABASE_FUNCTIONS } from "../data/data";
export default async function fetchSavedPalettes(userToken) {
  const url = `${SUPABASE_FUNCTIONS}/saved_palettes`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  const data = await res.json();
  if (res.status !== 200) throw Error();
  return data?.data;
}