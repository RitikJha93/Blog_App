import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";

function App() {
  return <div className="App">
    <Topbar />
    {/* <Home /> */}
    {/* <Single /> */}
    {/* <Write /> */}
    <Settings />
  </div>;
}

export default App;
