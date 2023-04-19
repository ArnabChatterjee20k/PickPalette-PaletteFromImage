import React from "react";
import UploadIcon from "../../../components/UploadIcon";

export default function UploadButton() {
  return (
    <button type="button" className="upload-btn relative">
      <GlowDiv />
      <UploadIcon />
      Upload
    </button>
  );
}

function GlowDiv() {
  return (
    <div className="bg-green-200 bg-opacity-54 blur-3xl w-full h-full -left-1 z-0 absolute" />
  );
}
