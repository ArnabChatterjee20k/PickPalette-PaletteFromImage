import Divider from "../../components/Divider";
import FamousPalettes from "./Components/FamousPalettes";
import PaletteGenerator from "./Components/PaletteGenerator";
import { ClientOnly } from "remix-utils/client-only";
export default function ImageUpload() {
  return (
    <section className="mt-6">
      <PaletteGenerator />
      <div className="my-5">
        <Divider />
      </div>
      <ClientOnly>{() => <FamousPalettes />}</ClientOnly>
    </section>
  );
}
