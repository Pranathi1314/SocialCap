import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerPopularBrandsAmul.module.css";
const ConsumerPopularBrandsAmul = () => {
  const navigate = useNavigate();

  const onEmojioneMonotoneletterSClick = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onMyProfileClick = useCallback(() => {
    navigate("/consumer-my-profile");
  }, [navigate]);

  const onNewBrandsContainerClick = useCallback(() => {
    navigate("/consumer-new-brands");
  }, [navigate]);

  const onOffersContainerClick = useCallback(() => {
    navigate("/offers");
  }, [navigate]);

  const onPopularBrandsContainerClick = useCallback(() => {
    navigate("/consumer-popular-branda");
  }, [navigate]);

  const onPopularChoicesContainerClick = useCallback(() => {
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

  const onAccept1Container3Click = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onAccept1Container4Click = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onAccept1Container5Click = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onAccept1Container6Click = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onAccept1Container7Click = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onMyProfileContainerClick = useCallback(() => {
    navigate("/consumer-my-profile");
  }, [navigate]);

  const onMyCartContainerClick = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/consumer-search");
  }, [navigate]);

  return (
    <div className={styles.consumerPopularBrandsAmul}>
      <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
      <div className={styles.consumerPopularBrandsAmulChild} />
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-52.svg" />
        <div className={styles.amul}>Amul</div>
      </div>
      <div className={styles.consumerPopularBrandsAmulItem} />
      <div className={styles.consumerPopularBrandsAmulInner} />
      <div className={styles.optons}>5 optons</div>
      <div className={styles.optons1}>114 optons</div>
      <div className={styles.optons2}>114 optons</div>
      <div className={styles.optons3}>114 optons</div>
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      <img className={styles.image6Icon} alt="" src="/image-62@2x.png" />
      <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      <b className={styles.amulMilk}>{`Amul Milk `}</b>
      <b className={styles.rs56l}>Rs. 56/L</b>
      <b className={styles.rs4001kg}>Rs. 400 1kg</b>
      <b className={styles.rs50}>Rs. 50</b>
      <b className={styles.rs200}>Rs. 200</b>
      <b className={styles.rs110}>Rs. 110</b>
      <b className={styles.rs40}>{`Rs. 40 `}</b>
      <b className={styles.rs401}>{`Rs. 40 `}</b>
      <b className={styles.rs402}>{`Rs. 40 `}</b>
      <b className={styles.amulGhee}>Amul Ghee</b>
      <b className={styles.amulLassi}>Amul Lassi</b>
      <b className={styles.amulPaneer}>Amul Paneer</b>
      <b className={styles.amulChocolate}>Amul Chocolate</b>
      <b className={styles.amulLassi1}>Amul Lassi</b>
      <b className={styles.amulButter}>{`Amul Butter `}</b>
      <b className={styles.amulCheese}>Amul Cheese</b>
      <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
      <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      <img className={styles.image22Icon} alt="" src="/image-221@2x.png" />
      <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector5.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector.svg" />
      <img
        className={styles.emojioneMonotoneletterSIcon}
        alt=""
        src="/emojionemonotoneletters4.svg"
        onClick={onEmojioneMonotoneletterSClick}
      />
      <div className={styles.myProfile} onClick={onMyProfileClick} />
      <div className={styles.newBrands} onClick={onNewBrandsContainerClick}>
        <div className={styles.newBrands1}>New Brands</div>
      </div>
      <div className={styles.offers} onClick={onOffersContainerClick}>
        <div className={styles.newBrands1}>
          <p className={styles.offers2}>Offers</p>
        </div>
      </div>
      <div
        className={styles.popularBrands}
        onClick={onPopularBrandsContainerClick}
      >
        <div className={styles.newBrands1}>Popular Brands</div>
      </div>
      <div
        className={styles.popularChoices}
        onClick={onPopularChoicesContainerClick}
      >
        <div className={styles.newBrands1}>Popular Choices</div>
      </div>
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
      <div className={styles.accept13} onClick={onAccept1Container3Click}>
        <div className={styles.accept1Child} />
        <div className={styles.addToCart}>Add to Cart</div>
      </div>
      <div className={styles.accept14} onClick={onAccept1Container4Click}>
        <div className={styles.accept1Child} />
        <div className={styles.addToCart}>Add to Cart</div>
      </div>
      <div className={styles.accept15} onClick={onAccept1Container5Click}>
        <div className={styles.accept1Child} />
        <div className={styles.addToCart}>Add to Cart</div>
      </div>
      <div className={styles.accept16} onClick={onAccept1Container6Click}>
        <div className={styles.accept1Child} />
        <div className={styles.addToCart}>Add to Cart</div>
      </div>
      <div className={styles.accept17} onClick={onAccept1Container7Click}>
        <div className={styles.accept1Child} />
        <div className={styles.addToCart}>Add to Cart</div>
      </div>
      <div className={styles.myProfile1} onClick={onMyProfileContainerClick}>
        <div className={styles.newBrands1}>My Profile</div>
      </div>
      <div className={styles.myCart} onClick={onMyCartContainerClick}>
        <div className={styles.newBrands1}>My Cart</div>
      </div>
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <div className={styles.search} onClick={onSearchTextClick}>
        Search
      </div>
    </div>
  );
};

export default ConsumerPopularBrandsAmul;
