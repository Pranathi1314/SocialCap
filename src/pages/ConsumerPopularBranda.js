import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerPopularBranda.module.css";
const ConsumerPopularBranda = () => {
  const navigate = useNavigate();

  const onSearchClick = useCallback(() => {
    navigate("/consumer-search");
  }, [navigate]);

  const onImage15ContainerClick = useCallback(() => {
    navigate("/consumer-popular-brandsamul");
  }, [navigate]);

  const onPopularChoicesContainerClick = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onPopularBrandsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onOffersContainerClick = useCallback(() => {
    navigate("/offers");
  }, [navigate]);

  const onNewBrandsTextClick = useCallback(() => {
    navigate("/consumer-new-brands");
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

  const onAboutTextClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  return (
    <div className={styles.consumerPopularBranda}>
      <div className={styles.consumerPopularBrandaChild} />
      <img
        className={styles.emojioneMonotoneletterSIcon}
        alt=""
        src="/emojionemonotoneletters.svg"
      />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <div className={styles.search} onClick={onSearchClick} />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-5.svg" />
        <div className={styles.popularBrands}>Popular Brands</div>
      </div>
      <div className={styles.image15} onClick={onImage15ContainerClick}>
        <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      </div>
      <b className={styles.amul}>{`Amul `}</b>
      <div className={styles.image16}>
        <img className={styles.image9Icon} alt="" src="/image-10@2x.png" />
      </div>
      <div className={styles.lijjatPapad}>
        <p className={styles.lijjatPapad1}>
          <b>Lijjat Papad</b>
          <span className={styles.span}>{` `}</span>
        </p>
      </div>
      <div className={styles.image17}>
        <img className={styles.image9Icon} alt="" src="/image-11@2x.png" />
      </div>
      <b className={styles.jhajiAachar}>
        <p className={styles.lijjatPapad1}>{`JhaJi Aachar `}</p>
      </b>
      <div className={styles.image20}>
        <img className={styles.image9Icon} alt="" src="/image-14@2x.png" />
      </div>
      <b className={styles.motherDairy}>Mother Dairy</b>
      <div className={styles.image19}>
        <img className={styles.image9Icon} alt="" src="/image-13@2x.png" />
      </div>
      <b className={styles.britannia}>Britannia</b>
      <div className={styles.image18}>
        <img className={styles.image9Icon} alt="" src="/image-12@2x.png" />
      </div>
      <b className={styles.patanjali}>Patanjali</b>
      <div className={styles.consumerPopularBrandaItem} />
      <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      <div
        className={styles.popularChoices}
        onClick={onPopularChoicesContainerClick}
      >
        <div className={styles.popularChoices1}>Popular Choices</div>
      </div>
      <div className={styles.optons}>114 optons</div>
      <div className={styles.consumerPopularBrandaInner} />
      <img className={styles.image5Icon} alt="" src="/image-6@2x.png" />
      <div
        className={styles.popularBrands1}
        onClick={onPopularBrandsContainerClick}
      >
        <div className={styles.popularChoices1}>Popular Brands</div>
      </div>
      <div className={styles.optons1}>114 optons</div>
      <img className={styles.image7Icon} alt="" src="/image-6@2x.png" />
      <img className={styles.image8Icon} alt="" src="/image-6@2x.png" />
      <div className={styles.offers} onClick={onOffersContainerClick}>
        <div className={styles.popularChoices1}>
          <p className={styles.lijjatPapad1}>Offers</p>
        </div>
      </div>
      <div className={styles.optons2}>114 optons</div>
      <div className={styles.newBrands} onClick={onNewBrandsTextClick}>
        New Brands
      </div>
      <div className={styles.optons3}>5 optons</div>
      <div className={styles.myProfile} onClick={onMyProfileContainerClick}>
        <div className={styles.popularChoices1}>My Profile</div>
      </div>
      <div className={styles.myCart} onClick={onMyCartContainerClick}>
        <div className={styles.popularChoices1}>My Cart</div>
      </div>
      <div className={styles.search1} onClick={onSearchTextClick}>
        Search
      </div>
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
    </div>
  );
};

export default ConsumerPopularBranda;
