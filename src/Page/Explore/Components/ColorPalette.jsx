import styled from "styled-components";
import useIsMobile from "../../../hooks/useIsMobile";
import getContrastingColor from "../../../utils/getContrastingColor";
import { usePaletteConext } from "../cotext/paletteContext";
import useColorClipboard from "../../../hooks/useColorClipboard";

export default function ColorPalette({ colors }) {
  const lastIndex = colors.length - 1;
  const {lastPaletteReference,isVisible} = usePaletteConext()
  // console.log({lastPaletteReference,isVisible})
  
  return (
    <div ref={lastPaletteReference} className="w-full max-w-[22rem] shadow-md overflow-hidden self-start">
      <ul class="flex w-full mb-4">
        {colors.map((color, index) => {
          return color ? (
              <PaletteItem
                key={`${color+index}`}
                className={`${index === 0 ? "rounded-l" : ""} ${
                  index === lastIndex ? "rounded-r" : ""
                }`}
                color={color}
              />
          ) : null;
        })}
      </ul>
    </div>
  );
}

const Item = styled.li`
  span {
    opacity:0;
    font-weight: bold;
    transition: all 0.5s ease;
    color: ${({color})=>getContrastingColor(color)};
  }

  &:hover span{
    opacity: 1;
  }
`

const PaletteItem = ({ className, color }) => {
  const isMobile = useIsMobile()
  const {defaultText , clickHandler} = useColorClipboard(color,"copied")
  return (
    <Item
      color={color}
      className={`h-28 flex justify-center items-center flex-grow basis-[1px] hover:basis-[10rem] cursor-pointer ${className}`}
      style={{ transition: "all 0.1s ease", backgroundColor: color }}
      onClick={()=>clickHandler(color)}

    >
      <span>{defaultText}</span>
    </Item>
  );
};
