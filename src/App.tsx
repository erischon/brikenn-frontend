import { useState } from "react";
import Landing from "./pages/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
