import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SupplierSignIn.css";
const SupplierSignIn = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/supplier-landing-page");
  }, [navigate]);

  return (
    <div className="supplier-sign-in">
      <div className="consumer-sign-in">
        <img
          className="login-background-1"
          alt=""
          src="/login-background-1@2x.png"
        />
        <img className="consumer-sign-in-child" alt="" src="/rectangle-8.svg" />
        <div className="contact-no">Contact No.</div>
        <div className="address">Address</div>
        <div className="password">Password</div>
        <img
          className="noto-v1woman-farmer-icon"
          alt=""
          src="/notov1womanfarmer.svg"
        />
        <b className="sign-up">Sign-Up</b>
        <div className="supplier-name">Supplier Name</div>
        <div className="consumer-sign-in-item" />
        <div className="consumer-sign-in-inner" />
        <img className="line-icon" alt="" src="/line-4.svg" />
        <div className="line-div" />
        <img className="consumer-sign-in-child1" alt="" src="/line-4.svg" />
        <div className="user-id">User Id</div>
        <div className="rectangle-div" onClick={onRectangle1Click} />
        <div className="sign-up1">Sign Up</div>
        <img className="riclose-line-icon" alt="" src="/ricloseline.svg" />
        <div className="already-have-an">Already have an account? Login</div>
        <img className="epback-icon" alt="" src="/epback.svg" />
        <img className="riclose-line-icon1" alt="" src="/ricloseline.svg" />
        <img className="riclose-line-icon2" alt="" src="/ricloseline.svg" />
        <div className="riclose-line" />
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img
          className="icbaseline-lock-icon"
          alt=""
          src="/icbaselinelock.svg"
        />
      </div>
    </div>
  );
};

export default SupplierSignIn;
