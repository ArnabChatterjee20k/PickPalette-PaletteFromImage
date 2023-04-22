import useIsMobile from "../../../hooks/useIsMobile";
import { Box } from "./Box";

export default function BottomBars() {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return (
    <div className="relative my-20">
    <div className="flex gap-3 items-end w-full absolute -bottom-48">
      <Box className={`w-[20rem] h-[260px] bg-[#D4D2CE]`} />
      <Box className={`w-[20rem] h-[150px] bg-[#207DB4]`} />
      <Box className={`w-[20rem] h-[240px] bg-[#1E9CD6]`} />
      <Box className={`w-[20rem] h-[180px] bg-[#DC5214]`} />
      <Box className={`w-[20rem] h-[340px] bg-[#EEAB57]`} />
    </div>
    </div>
  );
}