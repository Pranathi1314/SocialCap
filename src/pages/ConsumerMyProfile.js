import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerMyProfile.module.css";
const ConsumerMyProfile = () => {
  const navigate = useNavigate();

  const onEditDetailsGrpClick = useCallback(() => {
    navigate("/consumer-edit-details");
  }, [navigate]);

  const onLogoutButtonContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onMaskGroupIconClick = useCallback(() => {
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

  const onMyCartContainerClick = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/consumer-search");
  }, [navigate]);

  return (
    <div className={styles.consumerMyProfile}>
      <div className={styles.consumerMyProfileChild} />
      <div className={styles.editDetailsGrp} onClick={onEditDetailsGrpClick}>
        <div className={styles.editDetailsGrpChild} />
        <div className={styles.editDetails}>
          <p className={styles.edit}>Edit</p>
          <p className={styles.edit}>details</p>
        </div>
      </div>
      <div
        className={styles.logoutButton}
        onClick={onLogoutButtonContainerClick}
      >
        <div className={styles.editDetailsGrpChild} />
        <div className={styles.logOut}>LOG OUT</div>
      </div>
      <img
        className={styles.consumerMyProfileItem}
        alt=""
        src="/group-31.svg"
      />
      <div className={styles.personIcon} />
      <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
      <div className={styles.myProfile}>My Profile</div>
      <img className={styles.consumerMyProfileInner} alt="" src="/line-1.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.nameSwarnikaContainer}>
        <p className={styles.edit}>{`Name : Swarnika Singh  `}</p>
        <p className={styles.edit}>&nbsp;</p>
        <p className={styles.edit}>Contact No : 8433634222</p>
        <p className={styles.edit}>&nbsp;</p>
        <p className={styles.edit}>Society : Hyde Park Galaxy</p>
        <p className={styles.edit}>&nbsp;</p>
        <p className={styles.edit}>User ID : swarnikaftw@gmail.com</p>
        <p className={styles.edit}>&nbsp;</p>
        <p className={styles.edit}>Password : *******</p>
        <p className={styles.edit}>&nbsp;</p>
      </div>
      <img className={styles.company21Icon} alt="" src="/company2-1@2x.png" />
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="/mask-group.svg"
        onClick={onMaskGroupIconClick}
      />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
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
      <img className={styles.cartIcon} alt="" src="/cart-icon5.svg" />
      <div className={styles.myProfile1} onClick={onMyProfileContainerClick}>
        <div className={styles.myProfile2}>My Profile</div>
      </div>
      <div className={styles.myCart} onClick={onMyCartContainerClick}>
        <div className={styles.myProfile2}>My Cart</div>
      </div>
      <div className={styles.search} onClick={onSearchTextClick}>
        Search
      </div>
    </div>
  );
};

export default ConsumerMyProfile;
