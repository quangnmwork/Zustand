import produce from "immer";

interface Theme {
  theme: boolean;
}

function toggleTheme(state: Theme, theme: boolean) {
  return produce(state, (drafState) => {
    drafState.theme = theme;
  });
}
const baseStateTheme = {
  theme: true,
};

const produceToggleTheme = toggleTheme(baseStateTheme, false);

console.log(
  "Base state",
  baseStateTheme,
  "Currying producers",
  produceToggleTheme
);
produceToggleTheme.theme = true;
console.log(baseStateTheme);
