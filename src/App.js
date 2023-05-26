import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
