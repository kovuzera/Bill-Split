import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App wrapper">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
