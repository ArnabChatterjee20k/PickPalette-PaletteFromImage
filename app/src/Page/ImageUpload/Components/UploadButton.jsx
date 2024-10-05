import { useRef } from "react";
import UploadIcon from "../../../components/UploadIcon";
import ColorThief from "colorthief";
import { useImageContext } from "../Context/ImageContext";

export default function UploadButton() {
  const fileBtnRef = useRef(null);
  const { setUploadedImage,setPalette } = useImageContext();

  const clickHandler = () => {
    if (fileBtnRef) {
      fileBtnRef.current.click();
    }
  };

  const fileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const img = new Image();
      // automatically the url is getting handled here for non image files
      img.src = url;

      // this event will be triggered only for image files not for non image files
      img.onload = () => {
        setUploadedImage(url);
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img);
        setPalette(colorPalette)
      };
    }
  };

  return (
    <button
      type="button"
      className="upload-btn relative"
      onClick={clickHandler}
    >
      <GlowDiv />
      <UploadIcon />
      Upload
      <input
        ref={fileBtnRef}
        type="file"
        className="hidden"
        onChange={fileHandler}
      />
    </button>
  );
}

function GlowDiv() {
  return (
    <div className="bg-green-200 bg-opacity-54 blur-3xl w-full h-full -left-1 z-0 absolute" />
  );
}
