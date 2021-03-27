import { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserAuthContext from "../context/UserAuth";
import Home from "../pages/Homepage/Homepage";
import Login from "../pages/LoginPage/LoginPage";
import Logout from "../pages/Logout/Logout";
import SignUp from "../pages/SignUpPage/SignUpPage";
import Upload from "../pages/UploadPage/Upload";
import UserProfile from "../pages/UserProfile/UserProfile";

const Routed = () => {
  
  const { userLoggedIn } = useContext(UserAuthContext);
  if (userLoggedIn) {
  return (
    <Router basename="/">
      <Route exact path="/" component={Home} />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/user" component={UserProfile} />
      <Route exact path="/logout" component={Logout} />
    </Router>
  );
  }
  return (
    <Router basename='/'>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path="/logout" component={Logout} />
    </Router>
  )
};

export default Routed;
