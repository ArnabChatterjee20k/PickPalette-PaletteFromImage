import mockRequest from "../../../utils/mockRequest";
export default async function changeProjectPalette(data) {
    await mockRequest(1000)
  console.log("sending...", data);
}
