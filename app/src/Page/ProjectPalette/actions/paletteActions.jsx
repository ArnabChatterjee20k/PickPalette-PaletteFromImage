import {
  useMutation,
  useQueryClient,
  useMutationState,
} from "@tanstack/react-query";
import changeProjectPalette from "../utils/changeProjectPalette";
import { useParams } from "react-router-dom";
import {
  getLatestColorChanged,
  addToStack,
  isScheduled,
  startScheduling,
  noMoreScheduling,
  addToWaitList,
  getWaitList,
} from "../store/paletteStore";

export default function paletteActions() {
  const client = useQueryClient();
  const { id } = useParams();
  const queryKey = ["project-palette", id];
  const mutationKey = ["project-palette-update", id];
  const savingState = useMutationState({
    filters: { mutationKey: mutationKey, status: "pending" },
  });
  const { mutate, isPending } = useMutation({
    mutationKey: mutationKey,
    mutationFn: ({ data, projectId }) => changeProjectPalette(data, projectId),
  });

  function changePalette(color, idx) {
    client.setQueryData(queryKey, (old) => {
      const newData = { ...old };

      newData.colors = [...old.colors];
      newData.colors[idx] = color;

      return newData;
    });
  }

  function manualSave() {
    const oldDataForScheduledActions = client.getQueryData(queryKey);
    // addToStack(oldDataForScheduledActions);
    // perfromAction(1000);
    noMoreScheduling();
    console.log("manual saving.....");
    mutate(
      { data: oldDataForScheduledActions?.colors, projectId: id },
      {
        onSuccess: () => {
          console.log({
            dataSent: oldDataForScheduledActions?.colors,
          });
        },
        onSettled: () => {
          console.log("manual saving over");
        },
      }
    );
  }

  function savePalette() {
    // if a mutation is happening , the newly made changes will get lost
    const oldDataForScheduledActions = client.getQueryData(queryKey);
    addToStack(oldDataForScheduledActions);
    perfromAction(4000);
    if (isPending) {
      console.log("Adding to waitlist", oldDataForScheduledActions);
      addToWaitList(oldDataForScheduledActions);
    }
  }

  function perfromAction(timeout) {
    // debugger
    console.log({ isScheduled: isScheduled() });
    if (isScheduled()) return;
    console.log("saving");
    startScheduling();
    let timeoutId;
    timeoutId = setTimeout(() => {
      const newData = getLatestColorChanged();
      if (!newData?.colors.length) {
        clearTimeout(timeoutId);
        return;
      }
      console.log("mutating.....");
      mutate(
        { data: newData?.colors, projectId: id },
        {
          onSuccess: () => {
            console.log({
              newData,
            });
          },
          onSettled: () => {
            noMoreScheduling();
            // debugger;
            const waitListData = getWaitList();
            if (waitListData.length) {
              console.log("waitlist......", { waitListData });
              perfromAction(200);
            }
          },
        }
      );

      clearTimeout(timeoutId);
    }, timeout);
  }
  return { changePalette, savePalette, savingState, manualSave };
}
