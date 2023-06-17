import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerSignIn.css";
const ProducerSignIn = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/producer-landing-page");
  }, [navigate]);

  return (
    <div className="producer-sign-in">
      <div className="consumer-sign-in1">
        <img
          className="login-background-11"
          alt=""
          src="/login-background-2@2x.png"
        />
        <img className="rectangle-icon" alt="" src="/rectangle-8.svg" />
        <div className="contact-no1">Contact No.</div>
        <div className="address1">Address</div>
        <div className="password1">Password</div>
        <img
          className="twemojiman-office-worker-ligh-icon"
          alt=""
          src="/twemojimanofficeworkerlightskintone.svg"
        />
        <b className="sign-up2">Sign-Up</b>
        <div className="name-of-company">Name of Company</div>
        <div className="consumer-sign-in-child2" />
        <div className="consumer-sign-in-child3" />
        <img className="consumer-sign-in-child4" alt="" src="/line-41.svg" />
        <div className="consumer-sign-in-child5" />
        <img className="consumer-sign-in-child6" alt="" src="/line-41.svg" />
        <div className="user-id1">User Id</div>
        <div className="consumer-sign-in-child7" onClick={onRectangle1Click} />
        <div className="sign-up3">Sign Up</div>
        <img className="riclose-line-icon3" alt="" src="/ricloseline1.svg" />
        <div className="already-have-an1">Already have an account? Login</div>
        <img className="epback-icon1" alt="" src="/epback1.svg" />
        <img className="riclose-line-icon4" alt="" src="/ricloseline1.svg" />
        <img className="riclose-line-icon5" alt="" src="/ricloseline1.svg" />
        <div className="riclose-line1" />
        <img className="vector-icon1" alt="" src="/vector.svg" />
        <img
          className="icbaseline-lock-icon1"
          alt=""
          src="/icbaselinelock.svg"
        />
      </div>
    </div>
  );
};

export default ProducerSignIn;
