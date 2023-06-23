import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Offers.module.css";
const Offers = () => {
  const navigate = useNavigate();

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

  const onAboutContainerClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onEmojioneMonotoneletterSClick = useCallback(() => {
    navigate("/consumer-landing-page");
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

  const onSearchClick = useCallback(() => {
    navigate("/consumer-search");
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
    <div className={styles.offers}>
      <div className={styles.consumerOffers}>
        <div className={styles.consumerOffersChild} />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-51.svg" />
          <div className={styles.offers1}>Offers</div>
        </div>
        <div className={styles.consumerOffersItem} />
        <div className={styles.consumerOffersInner} />
        <div className={styles.optons}>5 optons</div>
        <div className={styles.optons1}>114 optons</div>
        <div className={styles.optons2}>114 optons</div>
        <div className={styles.optons3}>114 optons</div>
        <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <img className={styles.image6Icon} alt="" src="/image-61@2x.png" />
        <b className={styles.welcome50OffContainer}>
          <p className={styles.welcome}>{`Welcome `}</p>
          <p className={styles.welcome}>50% off on first order</p>
        </b>
        <b className={styles.partyon15OffContainer}>
          <p className={styles.welcome}>Partyon</p>
          <p className={styles.welcome}>15% off on orders above 3000</p>
        </b>
        <b className={styles.partyforever18OffContainer}>
          <p className={styles.welcome}>Partyforever</p>
          <p className={styles.welcome}>18% off on orders above 5000</p>
        </b>
        <b className={styles.swarnika20OffContainer}>
          <p className={styles.welcome}>Swarnika</p>
          <p className={styles.welcome}>20% off on orders above 7000</p>
        </b>
        <b className={styles.mysecond20OffContainer}>
          <p className={styles.welcome}>Mysecond</p>
          <p className={styles.welcome}>20% off on second order</p>
        </b>
        <b className={styles.mythird10OffContainer}>
          <p className={styles.welcome}>{`Mythird `}</p>
          <p className={styles.welcome}>10% off on third order</p>
        </b>
        <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
        <div className={styles.accept1} onClick={onAccept1ContainerClick}>
          <div className={styles.accept1Child} />
          <div className={styles.addToCart}>Apply</div>
        </div>
        <div className={styles.accept11} onClick={onAccept1Container1Click}>
          <div className={styles.accept1Child} />
          <div className={styles.addToCart}>Apply</div>
        </div>
        <div className={styles.accept12} onClick={onAccept1Container2Click}>
          <div className={styles.accept1Child} />
          <div className={styles.addToCart}>Apply</div>
        </div>
        <div className={styles.accept13} onClick={onAccept1Container3Click}>
          <div className={styles.accept1Child} />
          <div className={styles.addToCart}>Apply</div>
        </div>
        <div className={styles.accept14} onClick={onAccept1Container4Click}>
          <div className={styles.accept1Child} />
          <div className={styles.addToCart}>Apply</div>
        </div>
        <div className={styles.accept15} onClick={onAccept1Container5Click}>
          <div className={styles.accept1Child} />
          <div className={styles.addToCart}>Apply</div>
        </div>
        <div className={styles.about} onClick={onAboutContainerClick}>
          <div className={styles.about1} onClick={onAboutTextClick}>
            About
          </div>
        </div>
        <img
          className={styles.emojioneMonotoneletterSIcon}
          alt=""
          src="/emojionemonotoneletters3.svg"
          onClick={onEmojioneMonotoneletterSClick}
        />
        <div className={styles.myCart} onClick={onMyCartContainer1Click}>
          <div className={styles.myProfile}>My Profile</div>
          <div className={styles.myCart1} onClick={onMyCartContainerClick}>
            <div className={styles.myCart2}>My Cart</div>
          </div>
        </div>
        <div className={styles.myProfile1} onClick={onMyProfileClick} />
        <div className={styles.newBrands} onClick={onNewBrandsContainerClick}>
          <div className={styles.myCart2}>New Brands</div>
        </div>
        <div className={styles.offers2} onClick={onOffersContainerClick}>
          <div className={styles.myCart2}>
            <p className={styles.welcome}>Offers</p>
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
        <div className={styles.search} onClick={onSearchClick} />
        <img className={styles.vectorIcon1} alt="" src="/vector7.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector8.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector9.svg" />
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
    </div>
  );
};

export default Offers;
