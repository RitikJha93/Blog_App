import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./components/post/Post";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/write" element={<Write />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
