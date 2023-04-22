import { useState } from "react";
import Heading from "./Heading";
import UploadButton from "./UploadButton";
import { ImageContext } from "../Context/ImageContext";
import ImageViewer from "./ImageViewer";
import ColorPaletteHolder from "./ColorPaletteHolder";

export default function PaletteGenerator() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [palette, setPalette] = useState([]);
  return (
    <div className="flex flex-col items-center gap-7 px-4 content">
      <ImageContext.Provider value={{ setUploadedImage, setPalette,palette }}>
        {/* {!uploadedImage && <Heading />} */}
        <Heading />
        {uploadedImage && <ImageViewer src={uploadedImage} />}
        <UploadButton />
        {/* {uploadedImage && uploadedImage} */}
        <ColorPaletteHolder/>
      </ImageContext.Provider>
    </div>
  );
}
// background: rgba(126,231,135,.54);
// filter: blur(138.5px);
// width: 234px;
// height: 234px;
// }
