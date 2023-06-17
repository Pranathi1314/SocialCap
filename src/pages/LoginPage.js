import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = () => {
  const navigate = useNavigate();

  const onRegisterTextClick = useCallback(() => {
    navigate("/role");
  }, [navigate]);

  return (
    <div className="login-page">
      <img
        className="login-background-14"
        alt=""
        src="/login-background-2@2x.png"
      />
      <div className="login-page-child" />
      <img
        className="emojione-monotoneletter-s-icon12"
        alt=""
        src="/emojionemonotoneletters3.svg"
      />
      <b className="login2">Login</b>
      <div className="email">Email</div>
      <div className="twilsonpicklesgmailcom">twilsonpickles@gmail.com</div>
      <img className="login-page-item" alt="" src="/line-2.svg" />
      <img className="login-page-inner" alt="" src="/line-2.svg" />
      <div className="password5">Password</div>
      <div className="div20">***********</div>
      <div className="forgot-password">Forgot password?</div>
      <div className="login-page-child1" />
      <div className="login3">Login</div>
      <img className="icbaseline-lock-icon2" alt="" src="/icbaselinelock.svg" />
      <img className="riclose-line-icon9" alt="" src="/ricloseline3.svg" />
      <div className="dont-have-an">{`Don’t have an account? `}</div>
      <img className="epback-icon4" alt="" src="/epback4.svg" />
      <b className="home1">Home</b>
      <b className="services1">Services</b>
      <b className="contact1">Contact</b>
      <b className="login4">
        <p className="login5">Login</p>
      </b>
      <img className="login-page-child2" alt="" src="/line-5.svg" />
      <b className="register" onClick={onRegisterTextClick}>
        Register
      </b>
    </div>
  );
};

export default LoginPage;
