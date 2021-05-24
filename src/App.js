import "./App.css";
import { HomePage } from "./pages/homepage-components/homepage-comp";
import ShopPage from './pages/shop-page/shop-page-comp';
import { Switch, Route ,Redirect } from "react-router-dom";
import Header from './components/header/header-comp';
import SignInSignOut from './pages/signin-signout-page/signin-signout-comp';
import {auth,createUserProfile} from './firebase/firebase.utils';
import React from "react";
import {setCurrentUser} from './redux/user/user-actions'; 
import CheckOut from './pages/checkout-page/checkout-comp';
import {connect} from 'react-redux';

class App extends React.Component{

  removeFromAuth;

  componentDidMount(){
    this.removeFromAuth=auth.onAuthStateChanged(async user =>{
      //this.setState({currentUser:user});
      if(user){
        const userRef=await createUserProfile(user);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        });
      }
      this.props.setCurrentUser(user);
    });
  }


  componentWillUnmount(){
    this.removeFromAuth();
  }


  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path='/checkout' component={CheckOut}/>
          <Route path="/sign-in" render ={() => this.props.currentUser? Redirect('/'):<SignInSignOut/>} />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});


const mapDispatchToProps= (dispatch) =>({
  setCurrentUser: (user)=>dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
