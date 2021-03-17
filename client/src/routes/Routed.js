import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Homepage/Homepage";
import Login from "../pages/LoginPage/LoginPage";
import SignUp from "../pages/SignUpPage/SignUpPage";
import Upload from "../pages/UploadPage/Upload";
import UserProfile from "../pages/UserProfile/UserProfile";

const Routed = () => {
  // if (loggedIn) {
  return (
    <Router basename="/">
      <Route exact path="/" component={Home} />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/user" component={UserProfile} />

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Router>
  );
  // }
  // return (
  //   <Router basename='/'>
  //     <Route exact path='/' component={Home} />
  //     <Route exact path='/login' component={Login} />
  //     <Route exact path='/signup' component={SignUp} />
  //   </Router>
  // )
};

export default Routed;
