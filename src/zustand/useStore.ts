import create, { SetState, GetState } from "zustand";
interface CountStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementWithValue: (inputValue: number) => void;
}
interface Theme {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
interface DogList {
  dogList: any;
  fetchDogList: () => void;
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
export const useTheme = create<Theme>(
  (set: SetState<Theme>, get: GetState<Theme>) => ({
    darkMode: false,
    toggleDarkMode: (): void => {
      const { darkMode } = get();
      set({ darkMode: !darkMode });
    },
  })
);
export const useDogList = create<DogList>(
  (set: SetState<DogList>, get: GetState<DogList>) => ({
    dogList: {},
    fetchDogList: async (): Promise<void> => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await res.json();

      set({ dogList: data });
    },
  })
);
