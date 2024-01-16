import { create } from "zustand";

export const useActionStore = create((set) => ({
  colorStack: [],
  isScheduled: false,
}));

export const addToStack = (color) =>
  useActionStore.setState((state) => ({
    colorStack: [...state.colorStack, color], // Fix: Update state.colorStack
  }));

export const noMoreScheduling = () =>
  useActionStore.setState({ isScheduled: false });

export const startScheduling = () =>
  useActionStore.setState({ isScheduled: true });

export const isScheduled = ()=> useActionStore.getState().isScheduled

export const emptySchedule = () => useActionStore.setState({ colorStack: [] });

export const getLatestColorChanged = () => {
  const stack = useActionStore.getState().colorStack;
  return stack[stack.length - 1];
};
