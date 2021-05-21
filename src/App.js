import "./App.css";
import { HomePage } from "./pages/homepage-components/homepage-comp";
import ShopPage from './pages/shop-page/shop-page-comp';
import { Switch, Route } from "react-router-dom";
import {Header} from './components/header/header-comp';
import SignInSignOut from './pages/signin-signout-page/signin-signout-comp';
import {auth,createUserProfile} from './firebase/firebase.utils';
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
    this.removeFromAuth=auth.onAuthStateChanged(async user =>{
      //this.setState({currentUser:user});
      if(user){
        const userRef=await createUserProfile(user);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state);
          });
        });
      }
      this.setState({currentUser:user});
    });
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
