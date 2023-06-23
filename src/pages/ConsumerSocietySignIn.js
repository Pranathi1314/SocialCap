import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerSocietySignIn.module.css";
const ConsumerSocietySignIn = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onRegisterYourselfAsClick = useCallback(() => {
    navigate("/consumer-sign-in");
  }, [navigate]);

  return (
    <div className={styles.consumerSocietySignIn}>
      <div className={styles.consumerSignIn}>
        <img
          className={styles.loginBackground1}
          alt=""
          src="/login-background-1@2x.png"
        />
        <img
          className={styles.consumerSignInChild}
          alt=""
          src="/rectangle-8.svg"
        />
        <div className={styles.alreadyHaveAn} onClick={onAlreadyHaveAnClick}>
          Already have an account? Login
        </div>
        <div className={styles.contactNo}>Contact No.</div>
        <div className={styles.numberOfFlats}>Number of Flats</div>
        <div className={styles.password}>Password</div>
        <img
          className={styles.twemojifamilyIcon}
          alt=""
          src="/twemojifamily.svg"
        />
        <b className={styles.signUp}>Sign-Up</b>
        <div className={styles.societyName}>Society Name</div>
        <div className={styles.consumerSignInItem} />
        <div className={styles.consumerSignInInner} />
        <img className={styles.lineIcon} alt="" src="/line-41.svg" />
        <div className={styles.lineDiv} />
        <img className={styles.consumerSignInChild1} alt="" src="/line-6.svg" />
        <div className={styles.address}>Address</div>
        <div className={styles.rectangleDiv} onClick={onRectangle1Click} />
        <div className={styles.signUp1}>Sign Up</div>
        <img className={styles.ricloseLineIcon} alt="" src="/ricloseline.svg" />
        <div
          className={styles.registerYourselfAs}
          onClick={onRegisterYourselfAsClick}
        >
          Register yourself as an individual? Signup
        </div>
        <img className={styles.epbackIcon} alt="" src="/epback.svg" />
        <img
          className={styles.ricloseLineIcon1}
          alt=""
          src="/ricloseline1.svg"
        />
        <img
          className={styles.ricloseLineIcon2}
          alt=""
          src="/ricloseline2.svg"
        />
        <div className={styles.ricloseLine} />
        <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector14.svg" />
      </div>
    </div>
  );
};

export default ConsumerSocietySignIn;
