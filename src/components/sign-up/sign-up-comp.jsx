import React from "react";

import { auth, createUserProfile } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input-comp";
import "./sign-up-styles.scss";
import CustomButton from "../custom-button/custom-button-comp";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords Doesnt match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfile(user,  {displayName} );
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("Error in signup", error.message);
    }
  };

  render() {
    return (
      <div className="signup">
        <h1 className="title">I Do Not Have a Account</h1>
        <span>Create Account with Email And password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Name"
            value={this.state.displayName}
            handleChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
