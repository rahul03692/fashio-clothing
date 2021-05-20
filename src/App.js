import "./App.css";
import { HomePage } from "./pages/homepage-components/homepage-comp";
import ShopPage from './pages/shop-page/shop-page-comp';
import { Switch, Route } from "react-router-dom";
import {Header} from './components/header/header-comp';
import SignInSignOut from './pages/signin-signout-page/signin-signout-comp';
import {auth} from './firebase/firebase.utils';
import React from "react";

class App extends React.Component{
  constructor(){
    super();

    this.state={
      currentUser:null,
    }
  }
  removeFromAuth;

  componentDidMount(){
    this.removeFromAuth=auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user);
    });
    //console.log(user);
  }


  componentWillUnmount(){
    this.removeFromAuth();
  }


  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
