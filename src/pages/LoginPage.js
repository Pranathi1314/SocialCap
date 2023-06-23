import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onRegisterTextClick = useCallback(() => {
    navigate("/role");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <img
        className={styles.loginBackground1}
        alt=""
        src="/login-background-15@2x.png"
      />
      <div className={styles.loginPageChild} />
      <img
        className={styles.emojioneMonotoneletterSIcon}
        alt=""
        src="/emojionemonotoneletters8.svg"
      />
      <b className={styles.login}>Login</b>
      <div className={styles.email}>Email</div>
      <div className={styles.twilsonpicklesgmailcom}>
        twilsonpickles@gmail.com
      </div>
      <img className={styles.loginPageItem} alt="" src="/line-22.svg" />
      <img className={styles.loginPageInner} alt="" src="/line-32.svg" />
      <div className={styles.password}>Password</div>
      <div className={styles.div}>***********</div>
      <div className={styles.forgotPassword}>Forgot password?</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.login1}>Login</div>
      <img
        className={styles.icbaselineLockIcon}
        alt=""
        src="/icbaselinelock1.svg"
      />
      <img className={styles.ricloseLineIcon} alt="" src="/ricloseline6.svg" />
      <div className={styles.dontHaveAn}>{`Don’t have an account? `}</div>
      <img className={styles.epbackIcon} alt="" src="/epback5.svg" />
      <b className={styles.home} onClick={onHomeTextClick}>
        Home
      </b>
      <b className={styles.services}>Services</b>
      <b className={styles.contact}>Contact</b>
      <b className={styles.login2}>
        <p className={styles.login3}>Login</p>
      </b>
      <img className={styles.lineIcon} alt="" src="/line-51.svg" />
      <b className={styles.register} onClick={onRegisterTextClick}>
        Register
      </b>
    </div>
  );
};

export default LoginPage;
