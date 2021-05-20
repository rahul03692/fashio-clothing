import "./App.css";
import { HomePage } from "./pages/homepage-components/homepage-comp";
import ShopPage from './pages/shop-page/shop-page-comp';
import { Switch, Route } from "react-router-dom";
import {Header} from './components/header/header-comp';
import SignInSignOut from './pages/signin-signout-page/signin-signout-comp';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInSignOut} />
      </Switch>
    </div>
  );
}

export default App;
