import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerAbout.module.css";
const ConsumerAbout = () => {
  const navigate = useNavigate();

  const onEmojioneMonotoneletterSClick = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onAboutContainerClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onMaskGroupIconClick = useCallback(() => {
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
    <div className={styles.consumerAbout}>
      <img className={styles.bg1Icon} alt="" src="/bg-1@2x.png" />
      <div className={styles.consumerAboutChild} />
      <img
        className={styles.emojioneMonotoneletterSIcon}
        alt=""
        src="/emojionemonotoneletters1.svg"
        onClick={onEmojioneMonotoneletterSClick}
      />
      <img className={styles.iconQuestionMarkCircle} alt="" src="/vector.svg" />
      <div className={styles.about} onClick={onAboutContainerClick}>
        <div className={styles.about1} onClick={onAboutTextClick}>
          About
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      <img className={styles.cartIcon} alt="" src="/cart-icon2.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
      <img className={styles.consumerAboutItem} alt="" src="/line-3.svg" />
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="/mask-group2.svg"
        onClick={onMaskGroupIconClick}
      />
      <img
        className={styles.consumerAboutInner}
        alt=""
        src="/rectangle-16.svg"
      />
      <div className={styles.myProfile} onClick={onMyProfileContainerClick}>
        <div className={styles.myProfile1}>My Profile</div>
      </div>
      <div className={styles.myCart} onClick={onMyCartContainerClick}>
        <div className={styles.myProfile1}>My Cart</div>
      </div>
      <div className={styles.search} onClick={onSearchTextClick}>
        Search
      </div>
    </div>
  );
};

export default ConsumerAbout;
