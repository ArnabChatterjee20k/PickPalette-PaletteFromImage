import { SUPABASE_FUNCTIONS } from "../data/data";
async function paletteOperation(palettes, userToken, operation) {
  const url = `${SUPABASE_FUNCTIONS}/saved_palettes?q=${operation}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({ savedPalette: palettes }),
  });
  const status = res.status;
  if (![200, 201, 204].includes(status)) throw Error("Some error occured");
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    return { status: "deleted" };
  }
}

export async function savePalette(palettes, userToken) {
  return await paletteOperation(palettes, userToken, "save");
}

export async function unSavePalette(palettes, userToken) {
  return await paletteOperation(palettes, userToken, "unsave");
}
