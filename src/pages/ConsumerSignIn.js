import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerSignIn.module.css";
const ConsumerSignIn = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onRegisterYourselfAsClick = useCallback(() => {
    navigate("/consumer-society-sign-in");
  }, [navigate]);

  return (
    <div className={styles.consumerSignIn}>
      <div className={styles.consumerSignIn1}>
        <img
          className={styles.loginBackground1}
          alt=""
          src="/login-background-13@2x.png"
        />
        <img
          className={styles.consumerSignInChild}
          alt=""
          src="/rectangle-83.svg"
        />
        <div className={styles.alreadyHaveAn} onClick={onAlreadyHaveAnClick}>
          Already have an account? Login
        </div>
        <div className={styles.contactNo}>Contact No.</div>
        <div className={styles.address}>Address</div>
        <div className={styles.password}>Password</div>
        <img
          className={styles.twemojifamilyIcon}
          alt=""
          src="/twemojifamily1.svg"
        />
        <b className={styles.signUp}>Sign-Up</b>
        <div className={styles.name}>Name</div>
        <div className={styles.consumerSignInItem} />
        <div className={styles.consumerSignInInner} />
        <img className={styles.lineIcon} alt="" src="/line-42.svg" />
        <div className={styles.lineDiv} />
        <img
          className={styles.consumerSignInChild1}
          alt=""
          src="/line-42.svg"
        />
        <div className={styles.userId}>User Id</div>
        <div className={styles.rectangleDiv} onClick={onRectangle1Click} />
        <div className={styles.signUp1}>Sign Up</div>
        <img
          className={styles.ricloseLineIcon}
          alt=""
          src="/ricloseline5.svg"
        />
        <div
          className={styles.registerYourselfAs}
          onClick={onRegisterYourselfAsClick}
        >
          Register yourself as a society?Signup
        </div>
        <img className={styles.epbackIcon} alt="" src="/epback3.svg" />
        <img
          className={styles.ricloseLineIcon1}
          alt=""
          src="/ricloseline5.svg"
        />
        <div className={styles.ricloseLine} />
        <img className={styles.vectorIcon} alt="" src="/vector19.svg" />
        <div className={styles.ricloseLine1} />
        <img className={styles.vectorIcon1} alt="" src="/vector17.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector20.svg" />
      </div>
    </div>
  );
};

export default ConsumerSignIn;
