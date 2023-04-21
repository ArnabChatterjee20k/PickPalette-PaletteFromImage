import Divider from "../../components/Divider";
import FamousPalettes from "./Components/FamousPalettes";
import PaletteGenerator from "./Components/PaletteGenerator";

export default function ImageUpload() {
  return (
    <>
      <PaletteGenerator />
      <div className="my-5">
        <Divider />
      </div>
      <FamousPalettes />
    </>
  );
}
