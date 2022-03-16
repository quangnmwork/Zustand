import produce from "immer";

interface Person {
  age: number;
  name: string;
}
const baseState: Person = {
  age: 20,
  name: "Quang",
};
const nextState = produce(baseState, (drafState) => {
  drafState.age = 21;
});

console.log("Base state", baseState.age, "Next state", nextState.age);
const todos = [
  /* 2 todo objects in here */
];

const nextTodos = produce(todos, (draft) => {
  draft.push({ text: "learn immer", done: true });
  draft[1].done = true;
});
