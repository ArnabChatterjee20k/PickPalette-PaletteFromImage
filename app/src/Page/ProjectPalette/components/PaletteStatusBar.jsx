import { Bars3Icon, ArrowPathIcon } from "@heroicons/react/24/outline";
import paletteActions from "../actions/paletteActions";
import { isScheduled } from "../store/paletteStore";
import useProjectPalette from "../services/useProjectPalette";
import Skeleton from "react-loading-skeleton";

export default function PaletteStatusBar() {
  const { savingState, manualSave } = paletteActions();
  console.log({ isScheduled: isScheduled() });
  const { data, isLoading } = useProjectPalette();
  return (
    <div className="flex justify-between px-2 py-2 shadow-lg mb-2">
      {/* <PaletteNameSkeleton /> */}
      {isLoading ? (
        <PaletteNameSkeleton />
      ) : (
        <h2 className="text-2xl font-semibold">{data?.name}</h2>
      )}
      {data?.colors && (
        <div className="flex gap-3 items-center">
          <button
            className="flex gap-1 text-xl items-center"
            onClick={manualSave}
            disabled={savingState.length}
          >
            <ArrowPathIcon
              className={`h-4 w-4 ${
                (savingState.length || isScheduled()) && "animate-spin"
              }`}
            />
            {savingState.length || isScheduled() ? "Saving..." : "Save"}
          </button>

          <Bars3Icon className="h-8 w-8" />
        </div>
      )}
    </div>
  );
}

function PaletteNameSkeleton() {
  return (
    <Skeleton
      containerClassName="w-20"
      width="100%"
      className="w-20 h-8"
      baseColor="#343838"
      highlightColor="#3c3d3d"
    />
  );
}
