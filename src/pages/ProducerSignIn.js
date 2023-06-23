import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProducerSignIn.module.css";
const ProducerSignIn = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    // Please sync "Producer landing Page" to the project
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.producerSignIn}>
      <div className={styles.consumerSignIn}>
        <img
          className={styles.loginBackground1}
          alt=""
          src="/login-background-12@2x.png"
        />
        <img
          className={styles.consumerSignInChild}
          alt=""
          src="/rectangle-82.svg"
        />
        <div className={styles.contactNo}>Contact No.</div>
        <div className={styles.address}>Address</div>
        <div className={styles.password}>Password</div>
        <img
          className={styles.twemojimanOfficeWorkerLighIcon}
          alt=""
          src="/twemojimanofficeworkerlightskintone.svg"
        />
        <b className={styles.signUp}>Sign-Up</b>
        <div className={styles.nameOfCompany}>Name of Company</div>
        <div className={styles.consumerSignInItem} />
        <div className={styles.consumerSignInInner} />
        <img className={styles.lineIcon} alt="" src="/line-42.svg" />
        <img className={styles.consumerSignInChild1} alt="" src="/line-5.svg" />
        <img
          className={styles.consumerSignInChild2}
          alt=""
          src="/line-42.svg"
        />
        <div className={styles.userId}>User Id</div>
        <div className={styles.rectangleDiv} onClick={onRectangle1Click} />
        <div className={styles.signUp1}>Sign Up</div>
        <img
          className={styles.ricloseLineIcon}
          alt=""
          src="/ricloseline4.svg"
        />
        <div className={styles.alreadyHaveAn} onClick={onAlreadyHaveAnClick}>
          Already have an account? Login
        </div>
        <img className={styles.epbackIcon} alt="" src="/epback2.svg" />
        <img
          className={styles.ricloseLineIcon1}
          alt=""
          src="/ricloseline4.svg"
        />
        <img
          className={styles.ricloseLineIcon2}
          alt=""
          src="/ricloseline4.svg"
        />
        <div className={styles.ricloseLine} />
        <img className={styles.vectorIcon} alt="" src="/vector18.svg" />
        <img
          className={styles.icbaselineLockIcon}
          alt=""
          src="/icbaselinelock.svg"
        />
      </div>
    </div>
  );
};

export default ProducerSignIn;
