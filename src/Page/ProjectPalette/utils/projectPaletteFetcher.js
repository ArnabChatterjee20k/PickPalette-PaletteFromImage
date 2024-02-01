// import mockRequest from "../../../utils/mockRequest";
import { SUPABASE_FUNCTIONS } from "../../../data/data"

export default async function projectPaletteFetcher(id) {
  //   await mockRequest(1000);
  // return ["#ffe2d1", "#e1f0c4", "#97ffd4", "#44ffc7", "#5e4c5a"];

  // let url = "http://localhost:54321/functions/v1/palette_handler/5";
  const url = `${SUPABASE_FUNCTIONS}/palette_handler/${id}`

  let options = {
    method: "GET",
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data.data[0].colors;
}