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
import { Context } from "./context/Context";
import { useContext } from "react";
function App() {

  const {user} = useContext(Context)
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/write" element={user ? <Write /> : <Login />} />
          <Route exact path="/register" element={user ? <Home /> :<Register />} />
          <Route exact path="/login" element={user ? <Home/> : <Login />} />
          <Route exact path="/settings" element={user ?<Settings /> : <Login />} />
          <Route exact path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
