import styled from "styled-components";
import useIsMobile from "../../../hooks/useIsMobile";
import getContrastingColor from "../../../utils/getContrastingColor";
import { usePaletteConext } from "../cotext/paletteContext";
import useColorClipboard from "../../../hooks/useColorClipboard";

export default function ColorPalette({ colors }) {
  const lastIndex = colors.length - 1;
  const { lastPaletteReference, isVisible } = usePaletteConext();
  // console.log({lastPaletteReference,isVisible})

  return (
    <div
      ref={lastPaletteReference}
      className="flex flex-col w-full overflow-hidden bg-white dark:bg-neutral-800/50 rounded-xl p-4 border-2 transition-all duration-150 ease-in-out border-slate-200 dark:border-neutral-800 shadow-sm"
    >
      <ul class="flex w-full mb-4">
        {colors.map((color, index) => {
          return color ? (
            <PaletteItem
              key={`${color + index}`}
              className={`${index === 0 ? "rounded-l" : ""} ${
                index === lastIndex ? "rounded-r" : ""
              }`}
              color={color}
              totalPalettes={colors.length}
            />
          ) : null;
        })}
      </ul>
    </div>
  );
}

const Item = styled.li`
  span {
    opacity: 0;
    font-weight: bold;
    transition: all 0.5s ease;
    color: ${({ color }) => getContrastingColor(color)};
  }

  width: ${({ totalPalettes }) => 100 / totalPalettes}%;

  &:hover {
    width: ${({ totalPalettes }) => 100 / totalPalettes + 20}%;
    transition: all 0.1s ease;
  }

  &:hover span {
    opacity: 1;
  }
`;

const PaletteItem = ({ className, color, totalPalettes }) => {
  const isMobile = useIsMobile();
  const { defaultText, clickHandler } = useColorClipboard(color, "copied");
  return (
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
