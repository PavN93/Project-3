import { HashRouter as Router, Route } from 'react-router-dom';
import Home from "../pages/Homepage/Homepage";
import Login from "../pages/LoginPage/LoginPage";
import SignUp from "../pages/SignUpPage/SignUpPage";

const Routed = () => {
  return (
    <Router basename='/'>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/Sign-up' component={SignUp}/>
    </Router>
  )
}


export default Routed;
//more routes to be added 
