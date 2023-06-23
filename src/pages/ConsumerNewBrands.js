import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerNewBrands.module.css";
const ConsumerNewBrands = () => {
  const navigate = useNavigate();

  const onAboutContainerClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onSearchClick = useCallback(() => {
    navigate("/consumer-search");
  }, [navigate]);

  const onMyCartContainer1Click = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onMyCartContainerClick = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onMyProfileClick = useCallback(() => {
    navigate("/consumer-my-profile");
  }, [navigate]);

  const onEmojioneMonotoneletterSClick = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onNewBrandsContainerClick = useCallback(() => {
    navigate("/consumer-new-brands");
  }, [navigate]);

  const onOffersContainerClick = useCallback(() => {
    navigate("/offers");
  }, [navigate]);

  const onPopularBrandsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPopularChoicesContainerClick = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onMyProfileContainerClick = useCallback(() => {
    navigate("/consumer-my-profile");
  }, [navigate]);

  const onMyCartContainer2Click = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/consumer-search");
  }, [navigate]);

  return (
    <div className={styles.consumerNewBrands}>
      <div className={styles.consumerNewBrandsChild} />
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-53.svg" />
        <div className={styles.newBrands}>New Brands</div>
      </div>
      <div className={styles.consumerNewBrandsItem} />
      <div className={styles.consumerNewBrandsInner} />
      <div className={styles.optons}>5 optons</div>
      <div className={styles.optons1}>114 optons</div>
      <div className={styles.optons2}>114 optons</div>
      <div className={styles.optons3}>114 optons</div>
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <img className={styles.image5Icon} alt="" src="/image-51@2x.png" />
      <img className={styles.image6Icon} alt="" src="/image-61@2x.png" />
      <b className={styles.newBrand}>New Brand</b>
      <b className={styles.newBrand1}>New Brand</b>
      <b className={styles.newBrand2}>New Brand</b>
      <b className={styles.newBrand3}>New Brand</b>
      <b className={styles.newBrand4}>New Brand</b>
      <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
      <img className={styles.image26Icon} alt="" src="/image-261@2x.png" />
      <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
      <img className={styles.image27Icon} alt="" src="/image-271@2x.png" />
      <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
      <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
      <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
      <div className={styles.about} onClick={onAboutContainerClick}>
        <div className={styles.about1} onClick={onAboutTextClick}>
          About
        </div>
      </div>
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <div className={styles.search} onClick={onSearchClick} />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector16.svg" />
      <div className={styles.myCart} onClick={onMyCartContainer1Click}>
        <div className={styles.myProfile}>My Profile</div>
        <div className={styles.myCart1} onClick={onMyCartContainerClick}>
          <div className={styles.myCart2}>My Cart</div>
        </div>
      </div>
      <div className={styles.myProfile1} onClick={onMyProfileClick} />
      <img
        className={styles.emojioneMonotoneletterSIcon}
        alt=""
        src="/emojionemonotoneletters5.svg"
        onClick={onEmojioneMonotoneletterSClick}
      />
      <div className={styles.newBrands1} onClick={onNewBrandsContainerClick}>
        <div className={styles.myCart2}>New Brands</div>
      </div>
      <div className={styles.offers} onClick={onOffersContainerClick}>
        <div className={styles.myCart2}>
          <p className={styles.offers2}>Offers</p>
        </div>
      </div>
      <div
        className={styles.popularBrands}
        onClick={onPopularBrandsContainerClick}
      >
        <div className={styles.myCart2}>Popular Brands</div>
      </div>
      <div
        className={styles.popularChoices}
        onClick={onPopularChoicesContainerClick}
      >
        <div className={styles.myCart2}>Popular Choices</div>
      </div>
      <div className={styles.myProfile2} onClick={onMyProfileContainerClick}>
        <div className={styles.myCart2}>My Profile</div>
      </div>
      <div className={styles.myCart3} onClick={onMyCartContainer2Click}>
        <div className={styles.myCart2}>My Cart</div>
      </div>
      <div className={styles.search1} onClick={onSearchTextClick}>
        Search
      </div>
    </div>
  );
};

export default ConsumerNewBrands;
