import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ConsumerSignIn.css";
const ConsumerSignIn = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  return (
    <div className="consumer-sign-in2">
      <div className="consumer-sign-in3">
        <img
          className="login-background-12"
          alt=""
          src="/login-background-2@2x.png"
        />
        <img
          className="consumer-sign-in-child8"
          alt=""
          src="/rectangle-8.svg"
        />
        <div className="contact-no2">Contact No.</div>
        <div className="address2">Address</div>
        <div className="password2">Password</div>
        <img className="twemojifamily-icon" alt="" src="/twemojifamily.svg" />
        <b className="sign-up4">Sign-Up</b>
        <div className="name">Name</div>
        <div className="consumer-sign-in-child9" />
        <div className="consumer-sign-in-child10" />
        <img className="consumer-sign-in-child11" alt="" src="/line-41.svg" />
        <div className="consumer-sign-in-child12" />
        <img className="consumer-sign-in-child13" alt="" src="/line-41.svg" />
        <div className="user-id2">User Id</div>
        <div className="consumer-sign-in-child14" onClick={onRectangle1Click} />
        <div className="sign-up5">Sign Up</div>
        <img className="riclose-line-icon6" alt="" src="/ricloseline2.svg" />
        <div className="already-have-an2">Already have an account? Login</div>
        <img className="epback-icon2" alt="" src="/epback2.svg" />
        <img className="riclose-line-icon7" alt="" src="/ricloseline2.svg" />
        <img className="riclose-line-icon8" alt="" src="/ricloseline2.svg" />
        <div className="riclose-line2" />
        <img className="vector-icon2" alt="" src="/vector.svg" />
        <img className="vector-icon3" alt="" src="/vector.svg" />
        <img className="vector-icon4" alt="" src="/vector1.svg" />
      </div>
    </div>
  );
};

export default ConsumerSignIn;
