import "./../../assets/css/Register.css";
import React, { Component } from "react";
import axios from "axios";
import hash from "md5";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationInfo: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.info = this.info.bind(this);
  }
  handleSubmit(e) {
    const { fname, lname, email, password, password_confirmation } = this.state;
    if (password.length < 8) {
      this.setState({
        registrationInfo: (
          <p style={{ color: "red" }}>Password at least 8 Characters</p>
        ),
      });
    } else {
      axios
        .post(
          "http://localhost:3001/u/registrations",
          {
            fname: fname,
            lname: lname,
            email: email,
            password: hash(password),
            password_confirmation: hash(password_confirmation),
          },
          { withCredentials: true }
        )
        .then((response) => {
          this.setState({ registrationInfo: response.data });
          this.info();
        })
        .catch((error) => {
          console.log("registration error", error);
        });
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );

      this.setState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    }
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  info(e) {
    if (
      this.state.registrationInfo === "Wrong Password Confirmation" ||
      this.state.registrationInfo === "Email is Already Registered"
    ) {
      this.setState({
        registrationInfo: (
          <p style={{ color: "red" }}>{this.state.registrationInfo}</p>
        ),
      });
    } else if (this.state.registrationInfo === "Registration Successful") {
      this.setState({
        registrationInfo: (
          <p style={{ color: "#478CCC" }}>{this.state.registrationInfo}</p>
        ),
      });
    }
  }

  render() {
    return (
      <div className="center">
        <div className="cardRegister">
          <div className="container">
            <h3>Create Your Account</h3>
            <form onSubmit={this.handleSubmit}>
              <label for="first-name">First Name</label>
              <br></br>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                value={this.state.fname}
                onChange={this.handleChange}
                required
              />
              <br></br>
              <label for="last-name">Last Name</label>
              <br></br>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={this.state.lname}
                onChange={this.handleChange}
                required
              />
              <br></br>
              <label for="email">Email Address</label>
              <br></br>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                value={this.state.email}
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
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <br></br>
              <label for="password">Password Confirmation</label>
              <br></br>
              <input
                type="password"
                name="password_confirmation"
                placeholder="Password"
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                required
              />
              <br></br>
              <label className="form-control">
                To Register With Us Please Tick to Our<br></br>
                <a href="##">Terms and Conditions</a>
                <input type="checkbox" name="checkbox" required />
                <span className="checkmark"></span>
              </label>
              <br></br>
              <div
                style={{
                  color: "black",
                  fontSize: "12px",
                }}
              >
                {this.state.registrationInfo}
              </div>
              <input className="btn-login" type="submit" value="Register" />
            </form>
          </div>
        </div>
        <center>
          <span className="desc">
            Already have an Account?{" "}
            <a href="u">
              <b>Sign In</b>
            </a>
          </span>
        </center>
      </div>
    );
  }
}

export default Registration;
