import Form from "./components/Form";
import "./App.css";
import { useTheme } from "./zustand/useStore";
import List from "./components/List";

function App() {
  const theme: boolean = useTheme((state) => state.darkMode);
  const bgColor = theme ? "bg-cyan-800" : "bg-cyan-500";

  return (
    <div className={bgColor + " h-full"}>
      <div className="flex justify-center pt-14">
        <Form />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
