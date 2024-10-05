import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function PaletteSkeleton() {
  return (
    <Skeleton
      containerClassName="flex-grow sm:h-screen"
      width="100%"
      className="h-[5rem] sm:h-[80%]"
      baseColor="#343838"
      highlightColor="#3c3d3d"
    />
  );
}
