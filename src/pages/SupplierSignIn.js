import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SupplierSignIn.module.css";
const SupplierSignIn = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    // Please sync "Supplier Landing Page" to the project
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.supplierSignIn}>
      <div className={styles.consumerSignIn}>
        <img
          className={styles.loginBackground1}
          alt=""
          src="/login-background-11@2x.png"
        />
        <img
          className={styles.consumerSignInChild}
          alt=""
          src="/rectangle-81.svg"
        />
        <div className={styles.contactNo}>Contact No.</div>
        <div className={styles.address}>Address</div>
        <div className={styles.password}>Password</div>
        <img
          className={styles.notoV1womanFarmerIcon}
          alt=""
          src="/notov1womanfarmer.svg"
        />
        <b className={styles.signUp}>Sign-Up</b>
        <div className={styles.supplierName}>Supplier Name</div>
        <div className={styles.consumerSignInItem} />
        <div className={styles.consumerSignInInner} />
        <img className={styles.lineIcon} alt="" src="/line-42.svg" />
        <img
          className={styles.consumerSignInChild1}
          alt=""
          src="/line-42.svg"
        />
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
          src="/ricloseline3.svg"
        />
        <div className={styles.alreadyHaveAn} onClick={onAlreadyHaveAnClick}>
          Already have an account? Login
        </div>
        <img className={styles.epbackIcon} alt="" src="/epback1.svg" />
        <img
          className={styles.ricloseLineIcon1}
          alt=""
          src="/ricloseline3.svg"
        />
        <img
          className={styles.ricloseLineIcon2}
          alt=""
          src="/ricloseline3.svg"
        />
        <div className={styles.ricloseLine} />
        <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
        <img
          className={styles.icbaselineLockIcon}
          alt=""
          src="/icbaselinelock.svg"
        />
      </div>
    </div>
  );
};

export default SupplierSignIn;
