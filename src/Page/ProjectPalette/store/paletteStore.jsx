import { create } from "zustand";

export const useActionStore = create((set) => ({
  colorStack: [], // for now it will be containing one set of colors only but we can use it to gather colors in LIFO or FIFO manner.
  isScheduled: false,
}));

export const addToStack = (color) =>
  useActionStore.setState((state) => ({
    colorStack:  color // Fix: Update state.colorStack
  }));

export const noMoreScheduling = () =>
  useActionStore.setState({ isScheduled: false,colorStack:[] });

export const startScheduling = () =>
  useActionStore.setState({ isScheduled: true });

export const isScheduled = ()=> useActionStore.getState().isScheduled

export const getLatestColorChanged = () => {
  const stack = useActionStore.getState().colorStack;
  return stack;
};
