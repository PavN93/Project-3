import { HashRouter as Router, Route } from 'react-router-dom';
import Home from "../pages/Homepage/homepage";

const Routed = () => {
  return (
    <Router basename='/'>
      <Route exact path='/' component={Home}/>
    </Router>
  )
}


export default Routed;
//more routes to be added 
