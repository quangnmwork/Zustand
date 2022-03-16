import produce from "immer";
import fetch from "node-fetch";
const user = {
  name: "michel",
  todos: {},
};

const loadedUser = produce(user, async function (draft) {
  //   draft.todos = await (
  //     await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  //   ).json();
  console.log(
    await (await fetch("https://pokeapi.co/api/v2/pokemon/ditto")).json()
  );
});
loadedUser;
