import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";
const FrameComponent = () => {
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="login-background-2-parent">
      <img
        className="login-background-2"
        alt=""
        src="/login-background-1@2x.png"
      />
      <img
        className="emojione-monotoneletter-s-icon"
        alt=""
        src="/emojionemonotoneletters.svg"
      />
      <b className="home">Home</b>
      <b className="services">Services</b>
      <b className="contact">Contact</b>
      <b className="login" onClick={onLoginTextClick}>
        <p className="welcome-to-social-cap">Login</p>
      </b>
      <img className="frame-child" alt="" src="/line-41.svg" />
      <div className="welcome-to-social-container">
        <p className="welcome-to-social-cap">
          <b>Welcome to Social cap.</b>
        </p>
        <p className="welcome-to-social-cap">
          <b>&nbsp;</b>
        </p>
        <p className="welcome-to-social-cap">We are a .............</p>
        <p className="welcome-to-social-cap">,.....................</p>
        <p className="welcome-to-social-cap">.......................</p>
        <p className="welcome-to-social-cap">
          .....................................
        </p>
        <p className="welcome-to-social-cap">
          .....................................
        </p>
      </div>
    </div>
  );
};

export default FrameComponent;
