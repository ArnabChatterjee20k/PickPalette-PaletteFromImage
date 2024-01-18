import { Bars3Icon, ArrowPathIcon } from "@heroicons/react/24/outline";
import paletteActions from "../actions/paletteActions";
import { isScheduled } from "../store/paletteStore";

export default function PaletteStatusBar() {
  const { savingState, manualSave } = paletteActions();
  console.log({isScheduled:isScheduled()})
  return (
    <div className="flex justify-between px-2 py-2 shadow-lg mb-2">
      <h2 className="text-2xl font-semibold">Project Name</h2>
      <div className="flex gap-3 items-center">
        <button
          className="flex gap-1 text-xl items-center"
          onClick={manualSave}
          disabled={savingState.length}
        >
          <ArrowPathIcon
            className={`h-4 w-4 ${(savingState.length || isScheduled()) && "animate-spin"}`}
          />
          {(savingState.length || isScheduled()) ? "Saving..." : "Save"}
        </button>
        <Bars3Icon className="h-8 w-8" />
      </div>
    </div>
  );
}
