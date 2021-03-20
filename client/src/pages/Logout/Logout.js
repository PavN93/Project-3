import "./Logout.css";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const location = useHistory("");
  const redirectToLogin = (event) => {
    event.preventDefault();
    location.push("/login");
  };

  return (
    <>
      <Menu />
      <div className="ui container">
        <h1>Logged out</h1>
        <div className="logoutContainer">
          <h4>Thank you for using Plantica!</h4>
          <button className="ui animated button" onClick={redirectToLogin}>
            <div className="visible content">Login</div>
            <div className="hidden content">
              <i aria-hidden="true" className="sign-in icon"></i>
            </div>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Logout;
