import { ClientOnly } from "remix-utils/client-only";
import styled, { keyframes } from "styled-components";
import useColorClipboard from "../../../hooks/useColorClipboard";

export default function ColorViewer({ color, clipboard, className }) {
  const { defaultText, clickHandler, leaveHandler, hoverHandler, display } =
    useColorClipboard(color, "copied");

  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => (
        <div
          className={`w-20 h-20 rounded border-2 relative cursor-pointer ${className}`}
          style={{ backgroundColor: color }}
          onMouseEnter={hoverHandler}
          onMouseLeave={leaveHandler}
        >
          {/* showing the text overlay */}
          {clipboard && display && (
            <Clipboard
              onClick={() => clickHandler(color)}
              className="w-full h-full rounded flex justify-center items-center bg-slate-100 absolute"
            >
              <p className="text-black">{defaultText}</p>
            </Clipboard>
          )}
        </div>
      )}
    </ClientOnly>
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
const MyStyled = typeof styled === 'function' ? styled : styled.default;

const Clipboard = MyStyled.button`
  animation: ${fade_in} 100ms linear;
`;
