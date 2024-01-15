import getContrastingColor from "../../../utils/getContrastingColor";
import getContrastingHoverBackground from "../../../utils/getContrastingHoverBackground";
export default function Palette({ color }) {
  return (
    <div
      className="flex-1 rounded-md flex justify-center items-end"
      style={{ backgroundColor: color, minHeight: "calc(100vh - 10rem)" }}
    >
      <ColorMenu color={color} />
    </div>
  );
}
function ColorMenu({ color }) {
  const fontColor = getContrastingColor(color);
  const hoverBG = getContrastingHoverBackground(color);
  return (
    <h4
      className={`font-bold text-2xl mx-3 md:mb-[7rem] px-4 py-2 rounded-lg hover:bg-[${hoverBG}]`}
      style={{ color: fontColor }}
    >
      {color}
    </h4>
  );
}
