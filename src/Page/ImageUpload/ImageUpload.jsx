import { useState } from "react";
import Heading from "./Components/Heading";
import UploadButton from "./Components/UploadButton";
import { ImageContext } from "./Context/ImageContext";
import ImageViewer from "./Components/ImageViewer";
import Palette from "../../components/Palette";
import ColorPaletteHolder from "./Components/ColorPaletteHolder";
export default function ImageUpload() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [palette, setPalette] = useState([]);
  return (
    <section className="flex flex-col items-center gap-7 px-4 content">
      <ImageContext.Provider value={{ setUploadedImage, setPalette,palette }}>
        {/* {!uploadedImage && <Heading />} */}
        <Heading />
        {uploadedImage && <ImageViewer src={uploadedImage} />}
        <UploadButton />
        {/* {uploadedImage && uploadedImage} */}
        <ColorPaletteHolder/>
      </ImageContext.Provider>
    </section>
  );
}
// background: rgba(126,231,135,.54);
// filter: blur(138.5px);
// width: 234px;
// height: 234px;
// }
