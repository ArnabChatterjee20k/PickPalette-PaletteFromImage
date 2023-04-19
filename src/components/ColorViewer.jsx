import { useState } from "react";

export default function ColorViewer({ color }) {
  const initialText = "copy";
  const [defaultText, setDefaultText] = useState(initialText);
  const [display, setDisplay] = useState(false);
  const clickHandler = async() => {
    setDefaultText("copied");
    await navigator.clipboard.writeText(color);
  };
  const leaveHandler = () => {
    setDefaultText(initialText);
    setDisplay(false);
  };
  return (
    <div
      className="w-20 h-20 rounded border-2 relative cursor-pointer"
      style={{ backgroundColor: color }}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={leaveHandler}
    >
      {display && (
        <div
          onClick={clickHandler}
          className="w-full h-full rounded flex justify-center items-center bg-slate-50 absolute"
        >
          <p className="text-black">{defaultText}</p>
        </div>
      )}
    </div>
  );
}
