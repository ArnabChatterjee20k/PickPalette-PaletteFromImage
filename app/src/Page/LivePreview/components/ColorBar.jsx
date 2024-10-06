import { createContext, useContext, useLayoutEffect, useState } from "react";
import * as pkg from "react-color"
const {SketchPicker} = pkg
import getContrastingColor from "../../../utils/getContrastingColor";
import * as Menubar from "@radix-ui/react-menubar";
import { useSearchParams } from "@remix-run/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import * as Popover from "@radix-ui/react-popover";
import * as Tooltip from "@radix-ui/react-tooltip";
import generateColorsOfDifferentCategory from "../../../utils/generateColorsOfDifferentCategory";
import { ClientOnly } from "remix-utils/client-only"; // Import ClientOnly from Remix

const colorGenerationOptions = [
  "Random",
  "Complementary",
  "Monochromatic",
  "Tetradic",
];

const ColorContext = createContext();

export default function ColorBar({ keys }) {
  const [colors, setColors] = useState({});
  // Using layout effect to get the styles before rendering of the DOM on the screen
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
    <div className="flex gap-[0.20rem] p-1 bg-gray-200 rounded-md flex-wrap">
      {Object.entries(colors).map(([colorVariable, color], idx) => (
        <ColorPicker
          key={colorVariable}
          colorVariable={colorVariable}
          currentColor={color}
          changePalette={changePalette}
        />
      ))}
      <ShuffleButton />
    </div>
  );
}

export function ColorPicker({ colorVariable, currentColor, changePalette }) {
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

  const bgColor =
    params.get(colorVariable) ||
    getComputedStyle(document.documentElement).getPropertyValue(
      `--${colorVariable}`
    );

  const fontColor = getContrastingColor(bgColor);

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger
          className={`px-5 py-2.5 rounded-[5px] font-medium`}
          style={{
            backgroundColor: bgColor,
          }}
        >
          <h4 style={{ color: fontColor }}>
            {colorVariable[0].toUpperCase() +
              colorVariable.slice(1, colorVariable.length)}
          </h4>
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

export function ShuffleButton() {
  const [colorGenerationType, setColorGenerationType] = useState("random");
  const [params, setSearchParams] = useSearchParams();

  return (
    <ColorContext.Provider
      value={{ colorGenerationType, setColorGenerationType }}
    >
      <div className="flex items-center rounded-[5px] font-medium bg-white">
        <TooltipForShuffle>
          <button
            className="pl-3 pr-1"
            onClick={() =>
              setSearchParams(
                generateColorsOfDifferentCategory(colorGenerationType)
              )
            }
          >
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"
              />
            </svg>
          </button>
        </TooltipForShuffle>
        <ShuffleMenu />
      </div>
    </ColorContext.Provider>
  );
}

function TooltipForShuffle({ children }) {
  return (
    <Tooltip.Provider delayDuration={100} skipDelayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
        <Tooltip.Content className="text-white bg-black p-4" sideOffset={6}>
          Randomize Colors
          <Tooltip.Arrow className="fill-black" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

function ShuffleMenu() {
  return (
    <Menubar.Root className="h-full">
      <Menubar.Menu>
        <Menubar.Trigger className="hover:bg-slate-100 w-full px-1 h-full rounded-tr-[5px] rounded-br-[5px]">
          <ChevronUpIcon className="w-4 h-4 text-black" />
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content className="rounded-sm shadow-lg" side="top">
            <ColorMenu />
            <Menubar.MenubarArrow className="fill-white" />
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}

function ColorMenu() {
  const { colorGenerationType, setColorGenerationType } =
    useContext(ColorContext);

  return (
    <Menubar.RadioGroup
      value={colorGenerationType}
      onValueChange={setColorGenerationType}
    >
      {colorGenerationOptions.map((generatorName) => (
        <Menubar.RadioItem
          className={`px-4 py-2 hover:bg-slate-600 hover:text-white cursor-pointer  ${
            generatorName.toLowerCase() === colorGenerationType
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          key={generatorName.toLowerCase()}
          value={generatorName.toLowerCase()}
        >
          {generatorName}
        </Menubar.RadioItem>
      ))}
    </Menubar.RadioGroup>
  );
}

// Use ClientOnly in the parent component where you render ColorBar
export function App() {
  const keys = ["primaryColor", "secondaryColor"]; // Example keys

  return (
    <ClientOnly>
      <ColorBar keys={keys} />
    </ClientOnly>
  );
}
