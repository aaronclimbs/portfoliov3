import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Home data-testid="home" />
    </Router>
  );
}

export default App;
