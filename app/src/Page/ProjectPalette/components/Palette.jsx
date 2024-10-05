import pkg from 'react-color';
const { SketchPicker } = pkg;
import getContrastingColor from "../../../utils/getContrastingColor";
import getContrastingHoverBackground from "../../../utils/getContrastingHoverBackground";
import * as Menubar from "@radix-ui/react-menubar";
import paletteActions from "../actions/paletteActions";

export default function Palette({ color,idx }) {
  return (
    <div
      className="flex-1 rounded-md flex justify-center items-end"
      style={{ backgroundColor: color, minHeight: "calc(100vh - 10rem)" }}
    >
      <ColorMenu color={color} idx={idx}/>
    </div>
  );
}
function ColorMenu({ color,idx }) {
  const { changePalette,savePalette } = paletteActions();
  const fontColor = getContrastingColor(color);
  const hoverBG = getContrastingHoverBackground(color);
  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger
          onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
          className={`font-bold text-2xl mx-3 md:mb-[7rem] px-4 py-2 rounded-lg hover:bg-[${hoverBG}]`}
        >
          <h4 style={{ color: fontColor }}>{color}</h4>
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content align="center" side="top">
            <SketchPicker
              color={color}
              onChange={(e) => changePalette(e.hex, idx)}
              onChangeComplete={savePalette}
            />
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}
