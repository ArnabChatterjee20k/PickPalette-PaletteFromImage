import mockRequest from "../../../utils/mockRequest";
import { addToWaitList } from "../store/paletteStore";

export default async function changeProjectPalette(data) {
    // await mockRequest(3000)
    fetch("http://localhost:3000/data",{
      body:JSON.stringify(data),
      method:"POST"
    })
  console.log("sending...", data);
}
