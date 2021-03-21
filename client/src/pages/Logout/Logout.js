import "./Logout.css";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ x: 0, y: 150, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            default: { duration: 1 },
          }}
          className="logoutContainer"
        >
          <h4>Thank you for using Plantica!</h4>
          <button className="ui animated button" onClick={redirectToLogin}>
            <div className="visible content">Login</div>
            <div className="hidden content">
              <i aria-hidden="true" className="sign-in icon"></i>
            </div>
          </button>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Logout;
