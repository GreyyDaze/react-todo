import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [mode, setMode] = useState("light");

  return (
    <div className="App" data-bs-theme={mode}>
      <TodoList mode={mode} setMode={setMode} />
    </div>
  );
}

export default App;
