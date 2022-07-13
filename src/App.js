import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import CheckLogin from "./pages/User/CheckLogin";
import Register from "./pages/User/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckLogin />} />
        <Route path="/u" element={<CheckLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
