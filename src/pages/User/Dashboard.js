import "../../assets/css/Dashboard.css";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { emailStore } from "../../redux/action/email.action";
import { loginStore } from "../../redux/action/login.action";
import Logout from "./Button/Logout";

function Dashboard({ isEmail }) {
  if (isEmail !== "") {
    return (
      <div>
        <div class="center">
          <div class="cardDashboard">
            <div class="container">
              <h3>Hello {isEmail}</h3>
              <br></br>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isEmail === "") {
    return <Navigate to="/u" />;
  } else {
    return <Navigate to="/404" />;
  }
}
const mapStateToprops = ({ emailStore: { isEmail } }) => ({
  isEmail,
});
const mapDispatchToProps = (dispatch) => ({
  loginStore: (isLogin) => dispatch(loginStore(isLogin)),
  emailStore: (isEmail) => dispatch(emailStore(isEmail)),
});
export default connect(mapStateToprops, mapDispatchToProps)(Dashboard);
