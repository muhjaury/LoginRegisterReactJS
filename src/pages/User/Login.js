import "./../../assets/css/Login.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { loginStore } from "../../redux/action/login.action";
import { emailStore } from "../../redux/action/email.action";
import axios from "axios";
import hash from "md5";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginInfo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.info = this.info.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    if (password.length < 8) {
      this.setState({
        loginInfo: (
          <p style={{ color: "red" }}>Password at least 8 Characters</p>
        ),
      });
    } else {
      axios
        .post(
          "http://localhost:3001/u/login",
          {
            email: email,
            password: hash(password),
          },
          { withCredentials: true }
        )
        .then((response) => {
          this.info(response.data);
        });
    }

    e.preventDefault();
  }
  info(data) {
    if (data === "Invalid Email or Password") {
      this.props.loginStore(false);
      this.props.emailStore("");
      this.setState({
        loginInfo: <p style={{ color: "red" }}>{data}</p>,
      });
    } else {
      this.props.loginStore(true);
      this.props.emailStore(this.state.email);
    }
  }

  render() {
    return (
      <div>
        <div class="center">
          <div class="cardLogin">
            <div class="container">
              <h3>Login to your Account</h3>
              <form name="login" onSubmit={this.handleSubmit}>
                <label for="email">Email Address</label>
                <br></br>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  onChange={this.handleChange}
                  required
                />
                <br></br>
                <label for="password">Password</label>
                <br></br>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  required
                />
                <br></br>
                <div
                  style={{
                    color: "black",
                    fontSize: "12px",
                  }}
                >
                  {this.state.loginInfo}
                </div>
                <input class="btn-login" type="submit" value="Login" />
              </form>
            </div>
          </div>
          <center>
            <span class="desc">
              Don't Have an Account?{" "}
              <a href="register">
                <b>Register</b>
              </a>
            </span>
          </center>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginStore: (isLogin) => dispatch(loginStore(isLogin)),
  emailStore: (isEmail) => dispatch(emailStore(isEmail)),
});
export default connect(null, mapDispatchToProps)(Login);
