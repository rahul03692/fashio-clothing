import React from "react";
import FormInput from "../form-input/form-input-comp";
import './sign-in-styles.scss';
import CustomButton from '../custom-button/custom-button-comp';
import {SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="signin">
        <h1 className='title'>I Already Have An Account</h1>
        <span>Sign In with your Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className='buttons'>
          <CustomButton type="submit"> Sign In</CustomButton>
          <CustomButton onClick={SignInWithGoogle} isGoogle> Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
