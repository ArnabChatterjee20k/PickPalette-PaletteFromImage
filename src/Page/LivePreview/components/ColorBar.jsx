import { useLayoutEffect, useState } from "react";
import { SketchPicker } from "react-color";
import getContrastingColor from "../../../utils/getContrastingColor";
import * as Menubar from "@radix-ui/react-menubar";
import { useSearchParams } from "react-router-dom";

export default function ColorBar({ keys }) {
  const [colors, setColors] = useState({});
  // using layouteffect to get the styles before rendering of the of dom on the screen
  useLayoutEffect(() => {
    const palettes = keys.reduce((prev, current) => {
      prev[current] = getComputedStyle(
        document.documentElement
      ).getPropertyValue(`--${current}`);
      return prev;
    }, {});
    setColors(palettes);
  }, []);
  function changePalette(colorVariable, newColor) {
    setColors((prevColors) => ({ ...prevColors, [colorVariable]: newColor }));
  }
  return (
    <div className="flex ">
      {Object.entries(colors).map(([colorVariable, color], idx) => (
        <ColorPicker
          key={colorVariable}
          colorVariable={colorVariable}
          currentColor={color}
          changePalette={changePalette}
        />
      ))}
    </div>
  );
}

function ColorPicker({ colorVariable, currentColor, changePalette }) {
  const [params, setParams] = useSearchParams();
  function savePalette(newColor) {
    const paramsData = Array.from(params.entries()).reduce(
      (prev, [key, value]) => {
        prev[key] = value;
        return prev;
      },
      {}
    );
    setParams({ ...paramsData, [colorVariable]: newColor });
  }

  const fontColor = getContrastingColor(currentColor);

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger
          style={{ backgroundColor: currentColor }}
          className={`font-bold text-2xl mx-3 md:mb-[7rem] px-4 py-2 rounded-lg `}
        >
          <h4 style={{ color: fontColor }}>{colorVariable}</h4>
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content align="center" side="top">
            <SketchPicker
              color={currentColor}
              onChange={(e) => changePalette(colorVariable, e.hex)}
              onChangeComplete={(color) => savePalette(color.hex)}
            />
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}
