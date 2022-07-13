import "../../../assets/css/Dashboard.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { emailStore } from "../../../redux/action/email.action";
import { loginStore } from "../../../redux/action/login.action";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    this.props.loginStore(false);
    this.props.emailStore("");
  }

  render() {
    return (
      <div>
        <button className="btn-login" onClick={this.handleLogOut}>
          Log Out
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginStore: (isLogin) => dispatch(loginStore(isLogin)),
  emailStore: (isEmail) => dispatch(emailStore(isEmail)),
});

export default connect(null, mapDispatchToProps)(Logout);
