import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import Single from "./pages/Single";

function App() {
  return <div className="App">
    <Topbar />
    {/* <Home /> */}
    <Single />
  </div>;
}

export default App;
