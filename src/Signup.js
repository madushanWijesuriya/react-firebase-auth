import React, { Component } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

class Signup extends Component {
  state = { displayName: "", email: "", password: "" };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("s");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } catch (err) {
      console.log("err", err);
    }
  };
  render() {
    const { displayName, email, password } = this.state;
    return (
      <div>
        <form className="signup" onSubmit={this.handleSubmit}>
          <h2>SignUp</h2>
          <input
            type="name"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            placeholder="Name"
          ></input>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          ></input>
          <button>SignUp</button>
        </form>
      </div>
    );
  }
}
export default Signup;
