import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";

const Attempt = ({ isLogin }) => {
  console.log({ isLogin });
  return (
    <div>
      <Routes>
        {isLogin ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </div>
  );
};
const mapStateToprops = ({ loginStore: { isLogin } }) => ({
  isLogin,
});
export default connect(mapStateToprops)(Attempt);
