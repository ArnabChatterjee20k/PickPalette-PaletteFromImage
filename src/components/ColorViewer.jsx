import { useState } from "react";
import styled,{keyframes} from "styled-components";

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
        <Clipboard
          onClick={clickHandler}
          className="w-full h-full rounded flex justify-center items-center bg-slate-100 absolute"
        >
          <p className="text-black">{defaultText}</p>
        </Clipboard>
      )}
    </div>
  );
}

const fade_in = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Clipboard = styled.div`
  animation: ${fade_in} 100ms linear;
`