import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Role.module.css";
const Role = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/producer-sign-in");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/consumer-sign-in");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/supplier-sign-in");
  }, [navigate]);

  return (
    <div className={styles.role}>
      <img
        className={styles.loginBackground1}
        alt=""
        src="/login-background-14@2x.png"
      />
      <div className={styles.roleChild} />
      <img
        className={styles.emojioneMonotoneletterSIcon}
        alt=""
        src="/emojionemonotoneletters6.svg"
      />
      <b className={styles.signUp}>Sign up</b>
      <div className={styles.whatsYourRole}>What’s your role?</div>
      <img className={styles.epbackIcon} alt="" src="/epback4.svg" />
      <img
        className={styles.notoV1womanFarmerIcon}
        alt=""
        src="/notov1womanfarmer1.svg"
      />
      <img
        className={styles.twemojifamilyIcon}
        alt=""
        src="/twemojifamily2.svg"
      />
      <img
        className={styles.twemojimanOfficeWorkerLighIcon}
        alt=""
        src="/twemojimanofficeworkerlightskintone1.svg"
      />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.producer}>Producer</div>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupChild} />
        <div className={styles.consumer}>Consumer</div>
      </div>
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer2Click}
      >
        <div className={styles.groupChild} />
        <div className={styles.supplier}>Supplier</div>
      </div>
    </div>
  );
};

export default Role;
