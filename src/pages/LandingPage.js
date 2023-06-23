import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
      <img
        className={styles.loginBackground2}
        alt=""
        src="/login-background-2@2x.png"
      />
      <img
        className={styles.emojioneMonotoneletterSIcon}
        alt=""
        src="/emojionemonotoneletters6.svg"
      />
      <b className={styles.home}>Home</b>
      <b className={styles.services}>Services</b>
      <b className={styles.contact}>Contact</b>
      <b className={styles.login} onClick={onLoginTextClick}>
        <p className={styles.welcomeToSocialCap}>Login</p>
      </b>
      <img className={styles.landingPageChild} alt="" src="/line-43.svg" />
      <div className={styles.welcomeToSocialContainer}>
        <p className={styles.welcomeToSocialCap}>
          <b>Welcome to Social cap.</b>
        </p>
        <p className={styles.welcomeToSocialCap}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.welcomeToSocialCap}>We are a .............</p>
        <p className={styles.welcomeToSocialCap}>,.....................</p>
        <p className={styles.welcomeToSocialCap}>.......................</p>
        <p className={styles.welcomeToSocialCap}>
          .....................................
        </p>
        <p className={styles.welcomeToSocialCap}>
          .....................................
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
