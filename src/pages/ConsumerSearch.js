import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerSearch.module.css";
const ConsumerSearch = () => {
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

  const onAccept1ContainerClick = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onAccept1Container1Click = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onAccept1Container2Click = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onMyCartContainerClick = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onMyProfileContainerClick = useCallback(() => {
    navigate("/consumer-my-profile");
  }, [navigate]);

  const onSearchText1Click = useCallback(() => {
    navigate("/consumer-search");
  }, [navigate]);

  return (
    <div className={styles.consumerSearch}>
      <div className={styles.consumerSearchChild} />
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
      <img className={styles.cartIcon} alt="" src="/cart-icon.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
      <img className={styles.consumerSearchItem} alt="" src="/group-14.svg" />
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="/mask-group.svg"
        onClick={onMaskGroupIconClick}
      />
      <div className={styles.search}>Search</div>
      <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
      <div className={styles.consumerSearchInner} />
      <div className={styles.lineDiv} />
      <img className={styles.lineIcon} alt="" src="/line-4.svg" />
      <div className={styles.ofOver200Container}>
        <span>3-10 of over 200 results for “</span>
        <i>Amul Butter</i>
        <span>”</span>
      </div>
      <b className={styles.results}>Results</b>
      <b className={styles.categories}>Categories:</b>
      <b className={styles.discounts}>Discounts:</b>
      <b className={styles.dairyProducts}>Dairy Products</b>
      <b className={styles.offOrMoreContainer}>
        <p className={styles.offOrMore}>10% off or more</p>
        <p className={styles.offOrMore}>20% off or more</p>
        <p className={styles.offOrMore}>30% off or more</p>
        <p className={styles.offOrMore}>40% off or more</p>
      </b>
      <b className={styles.papad}>Papad</b>
      <b className={styles.achaar}>Achaar</b>
      <b className={styles.cookingOil}>Cooking Oil</b>
      <b className={styles.chocolates}>Chocolates</b>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <b className={styles.amulButter}>{`Amul Butter `}</b>
      <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
      <div className={styles.accept1} onClick={onAccept1ContainerClick}>
        <div className={styles.accept1Child} />
        <div className={styles.addToCart}>Add to Cart</div>
      </div>
      <div className={styles.accept11} onClick={onAccept1Container1Click}>
        <div className={styles.accept1Child} />
        <div className={styles.addToCart}>Add to Cart</div>
      </div>
      <div className={styles.accept12} onClick={onAccept1Container2Click}>
        <div className={styles.accept1Child} />
        <div className={styles.addToCart}>Add to Cart</div>
      </div>
      <div className={styles.rs340ForContainer}>
        <b>{`Rs. 340 `}</b>
        <span>for</span>
        <b> 1 Kg</b>
      </div>
      <div className={styles.rs340ForContainer1}>
        <b>{`Rs. 340 `}</b>
        <span>for</span>
        <b> 1 Kg</b>
      </div>
      <div className={styles.rs390ForContainer}>
        <b>{`Rs. 390 `}</b>
        <span>for</span>
        <b> 1 Kg</b>
      </div>
      <img className={styles.image27Icon} alt="" src="/image-27@2x.png" />
      <b className={styles.amulUnsalted}>Amul Unsalted</b>
      <b className={styles.amulGarlicAnd}>{`Amul Garlic And HerbsButter `}</b>
      <div className={styles.myCart} onClick={onMyCartContainerClick}>
        <div className={styles.myCart1}>My Cart</div>
      </div>
      <div className={styles.myProfile} onClick={onMyProfileContainerClick}>
        <div className={styles.myCart1}>My Profile</div>
      </div>
      <div className={styles.search1} onClick={onSearchText1Click}>
        Search
      </div>
    </div>
  );
};

export default ConsumerSearch;
