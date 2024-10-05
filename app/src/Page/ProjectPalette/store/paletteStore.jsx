import { ClientOnly } from "remix-utils/client-only";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
export const useActionStore = create(
  devtools((set) => ({
    colorStack: [], // for now it will be containing one set of colors only but we can use it to gather colors in LIFO or FIFO manner.
    isScheduled: false,
    waitList: [],
  }))
);

export const addToStack = (color) =>
  useActionStore.setState((state) => ({
    colorStack: color, // Fix: Update state.colorStack
  }));

export const addToWaitList = (color) =>
  useActionStore.setState({ waitList: color });
export const getWaitList = () => {
  const res = structuredClone(useActionStore.getState().waitList)
  useActionStore.setState({ waitList: [] });
  addToStack(res)
  return res
};
export const noMoreScheduling = () =>
  useActionStore.setState({ isScheduled: false, colorStack: [] });

export const startScheduling = () =>
  useActionStore.setState({ isScheduled: true });

export const isScheduled = () => useActionStore.getState().isScheduled;

export const getLatestColorChanged = () => {
  const stack = useActionStore.getState().colorStack;
  const waitList = useActionStore.getState().waitList;
  console.log({stack,waitList})
  if(waitList.length) return getWaitList()
  return stack;
};