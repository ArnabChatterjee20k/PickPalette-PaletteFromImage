import { useMutation, useQueryClient, useMutationState } from "@tanstack/react-query";
import changeProjectPalette from "../utils/changeProjectPalette";
import { useParams } from "react-router-dom";
import {
  getLatestColorChanged,
  addToStack,
  isScheduled,
  startScheduling,
  noMoreScheduling,
} from "../store/paletteStore";

export default function paletteActions() {
  const client = useQueryClient();
  const { id } = useParams();
  const queryKey = ["project-palette", id];
  const mutationKey = ["project-palette-update", id];
  const savingState = useMutationState({filters:{mutationKey:mutationKey,status:"pending"}})
  const { mutate } = useMutation({
    mutationKey: mutationKey,
    mutationFn: (data) => changeProjectPalette(data),
  });

  function changePalette(color, idx) {
    client.setQueryData(queryKey, (old) => {
      const newData = [...old];
      newData[idx] = color;
      return newData;
    });
  }

  function savePalette() {
    // Store the current data for comparison in the useEffect
    const oldDataForScheduledActions = client.getQueryData(queryKey);
    addToStack(oldDataForScheduledActions);
    perfromAction();
  }

  function perfromAction() {
    console.log({ isScheduled: isScheduled() });
    if (isScheduled()) return;
    console.log("saving");
    startScheduling();
    let timeoutId;
    timeoutId = setTimeout(() => {
      const newData = getLatestColorChanged();
      mutate(newData, {
        onSuccess: () => {
          console.log({
            newData,
          });
        },
        onSettled: () => {
          noMoreScheduling();
        },
      });
      clearTimeout(timeoutId);
    }, 4000);
  }
  return { changePalette, savePalette ,savingState};
}
