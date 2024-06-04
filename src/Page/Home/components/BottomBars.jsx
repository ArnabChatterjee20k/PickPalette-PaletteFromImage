import useIsMobile from "../../../hooks/useIsMobile";
import { Box } from "./Box";

export default function BottomBars() {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return (
    <div className="relative my-20" style={{ paddingBottom: '90px' }}>
      <div className="flex gap-3 items-end w-full absolute bottom-0">
        <Box className={`w-[18rem] h-[200px] bg-[#D4D2CE]`} />
        <Box className={`w-[18rem] h-[100px] bg-[#207DB4]`} />
        <Box className={`w-[18rem] h-[180px] bg-[#1E9CD6]`} />
        <Box className={`w-[18rem] h-[120px] bg-[#DC5214]`} />
        <Box className={`w-[18rem] h-[250px] bg-[#EEAB57]`} />
      </div>
    </div>
  );
}
