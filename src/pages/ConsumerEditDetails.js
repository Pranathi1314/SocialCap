import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerEditDetails.module.css";
const ConsumerEditDetails = () => {
  const navigate = useNavigate();

  const onEditDetailsGrpClick = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onLogoutButtonContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onMyCartContainerClick = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onMaskGroupClick = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onAboutContainerClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onEmojioneMonotoneletterSClick = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onMyProfileContainerClick = useCallback(() => {
    navigate("/consumer-my-profile");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/consumer-search");
  }, [navigate]);

  return (
    <div className={styles.consumerEditDetails}>
      <div className={styles.consumerEditDetailsChild} />
      <div className={styles.editDetailsGrp} onClick={onEditDetailsGrpClick}>
        <div className={styles.editDetailsGrpChild} />
        <div className={styles.editDetails}>Confirm ?</div>
      </div>
      <div
        className={styles.logoutButton}
        onClick={onLogoutButtonContainerClick}
      >
        <div className={styles.editDetailsGrpChild} />
        <div className={styles.logOut}>LOG OUT</div>
      </div>
      <img
        className={styles.consumerEditDetailsItem}
        alt=""
        src="/group-3.svg"
      />
      <div className={styles.personIcon} />
      <div className={styles.myCart} onClick={onMyCartContainerClick}>
        <div className={styles.myCart1}>My Cart</div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
      <div className={styles.editDetails1}>Edit Details</div>
      <div className={styles.consumerEditDetailsInner} />
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="/mask-group1.svg"
        onClick={onMaskGroupClick}
      />
      <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
      <div className={styles.about} onClick={onAboutContainerClick}>
        <div className={styles.about1}>About</div>
      </div>
      <img className={styles.iconQuestionMarkCircle} alt="" src="/vector.svg" />
      <img
        className={styles.emojioneMonotoneletterSIcon}
        alt=""
        src="/emojionemonotoneletters2.svg"
        onClick={onEmojioneMonotoneletterSClick}
      />
      <img className={styles.cartIcon} alt="" src="/cart-icon1.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.nameSwarnikaContainer}>
        <p className={styles.nameSwarnika}>{`Name : Swarnika Singh  `}</p>
        <p className={styles.nameSwarnika}>&nbsp;</p>
        <p className={styles.nameSwarnika}>Contact No : 8433634222</p>
        <p className={styles.nameSwarnika}>&nbsp;</p>
        <p className={styles.nameSwarnika}>Society : Hyde Park Galaxy</p>
        <p className={styles.nameSwarnika}>&nbsp;</p>
        <p className={styles.nameSwarnika}>User ID : swarnikaftw@gmail.com</p>
        <p className={styles.nameSwarnika}>&nbsp;</p>
        <p className={styles.nameSwarnika}>Password : *******</p>
        <p className={styles.nameSwarnika}>&nbsp;</p>
      </div>
      <img className={styles.company21Icon} alt="" src="/company2-1@2x.png" />
      <div className={styles.consumerEditDetailsInner1}>
        <img
          className={styles.componentChild}
          alt=""
          src="/rectangle-6@2x.png"
        />
      </div>
      <div className={styles.consumerEditDetailsInner2}>
        <img
          className={styles.componentChild}
          alt=""
          src="/rectangle-6@2x.png"
        />
      </div>
      <div className={styles.consumerEditDetailsInner3}>
        <img
          className={styles.componentChild}
          alt=""
          src="/rectangle-6@2x.png"
        />
      </div>
      <div className={styles.consumerEditDetailsInner4}>
        <img
          className={styles.componentChild}
          alt=""
          src="/rectangle-6@2x.png"
        />
      </div>
      <div className={styles.consumerEditDetailsInner5}>
        <img
          className={styles.componentChild}
          alt=""
          src="/rectangle-6@2x.png"
        />
      </div>
      <div className={styles.consumerEditDetailsChild1} />
      <div className={styles.myProfile} onClick={onMyProfileContainerClick}>
        <div className={styles.myCart1}>My Profile</div>
      </div>
      <div className={styles.search} onClick={onSearchTextClick}>
        Search
      </div>
    </div>
  );
};

export default ConsumerEditDetails;
