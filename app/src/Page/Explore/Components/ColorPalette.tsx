import styled from "styled-components";
import useIsMobile from "../../../hooks/useIsMobile";
import getContrastingColor from "../../../utils/getContrastingColor";
import { usePaletteConext } from "../cotext/paletteContext";
import useColorClipboard from "../../../hooks/useColorClipboard";

import { LikeButton, LivePreviewButton, UsePaletteInProject } from "./Buttons";

interface ItemProps {
  color: string;
  totalPalettes: number;
}

// @ts-ignore
const MyStyled: typeof styled = typeof styled === 'function' ? styled : styled.default;


const Item = MyStyled.li<ItemProps>`
  span {
    opacity: 0;
    font-weight: bold;
    transition: all 0.5s ease;
    color: ${({ color }) => getContrastingColor(color)};
  }

  width: ${({ totalPalettes }) => 100 / totalPalettes}%;

  &:hover {
    width: ${({ totalPalettes }) => 100 / totalPalettes + 10}%;
    transition: all 0.1s ease;
  }

  &:hover span {
    opacity: 1;
  }
`;


export default function ColorPalette({ colors }) {
  const lastIndex = colors.length - 1;
  const { lastPaletteReference, isVisible } = usePaletteConext();
  // console.log({lastPaletteReference,isVisible})

  return (
    <div
      ref={lastPaletteReference}
      className="flex flex-col w-full overflow-hidden bg-neutral-800/50 rounded-xl p-4 border-2 transition-all duration-150 ease-in-out border-neutral-800 shadow-sm"
    >
      <ul className="flex gap-2 w-full mb-4 overflow-x-scroll sm:overflow-hidden">
        {colors.map((color, index) => {
          return color ? (
            <PaletteItem
              key={`${color + index}`}
              className="rounded-lg"
              color={color}
              totalPalettes={colors.length}
            />
          ) : null;
        })}
      </ul>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <UsePaletteInProject />
          <LivePreviewButton palettes={colors} />
        </div>
        <LikeButton palettes={colors} />
      </div>
    </div>
  );
}

const PaletteItem = ({ className, color, totalPalettes }) => {
  const isMobile = useIsMobile();
  const { defaultText, clickHandler } = useColorClipboard(color, "copied");
  return (
    // @ts-ignore
    <Item
      totalPalettes={totalPalettes}
      color={color}
      className={`h-14 sm:h-16 flex justify-center items-center cursor-pointer ${className}`}
      style={{ backgroundColor: color }}
      onClick={() => clickHandler(color)}
    >
      <span className="text-xs sm:text-sm">{defaultText}</span>
    </Item>
  );
};
