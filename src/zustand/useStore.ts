import create, { SetState, GetState } from "zustand";
interface CountStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementWithValue: (inputValue: number) => void;
}

export const useStore = create<CountStore>(
  (set: SetState<CountStore>, get: GetState<CountStore>) => ({
    count: 0,
    increment: (): void => {
      const { count } = get();
      set({ count: count + 1 });
    },
    decrement: (): void => {
      const { count } = get();
      set({ count: count - 1 });
    },
    incrementWithValue: (inputValue: number): void => {
      const { count } = get();
      set({ count: count + inputValue });
    },
  })
);
