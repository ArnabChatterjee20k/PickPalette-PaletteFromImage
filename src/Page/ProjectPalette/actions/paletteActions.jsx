import { useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  const mutate = useMutation({
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
      mutate.mutate(newData, {
        onSuccess: () => {
          console.log({
            newData,
          });
        },
      });
      clearTimeout(timeoutId);
      noMoreScheduling();
    }, 4000);
  }
  return { changePalette, savePalette };
}
