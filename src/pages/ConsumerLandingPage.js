import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerLandingPage.module.css";
const ConsumerLandingPage = () => {
  const navigate = useNavigate();

  const onSearchClick = useCallback(() => {
    navigate("/consumer-search");
  }, [navigate]);

  const onAboutContainerClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/consumer-about");
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

  const onPopularBrandsContainerClick = useCallback(() => {
    navigate("/consumer-popular-branda");
  }, [navigate]);

  const onOffersContainerClick = useCallback(() => {
    navigate("/offers");
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

  const onSearchTextClick = useCallback(() => {
    navigate("/consumer-search");
  }, [navigate]);

  return (
    <div className={styles.consumerLandingPage}>
      <div className={styles.consumerLandingPage1}>Consumer landing page</div>
      <div className={styles.consumerLandingPage2}>
        <div className={styles.consumerLandingPageChild} />
        <img
          className={styles.emojioneMonotoneletterSIcon}
          alt=""
          src="/emojionemonotoneletters7.svg"
        />
        <div className={styles.search} onClick={onSearchClick} />
        <div className={styles.about} onClick={onAboutContainerClick}>
          <div className={styles.about1} onClick={onAboutTextClick}>
            About
          </div>
        </div>
        <div className={styles.myCart} onClick={onMyCartContainer1Click}>
          <div className={styles.myProfile}>My Profile</div>
          <div className={styles.myCart1} onClick={onMyCartContainerClick}>
            <div className={styles.myCart2}>My Cart</div>
          </div>
        </div>
        <div className={styles.myProfile1} onClick={onMyProfileClick} />
        <div className={styles.mango1} />
        <div className={styles.div}>
          <p className={styles.p}>1.</p>
        </div>
        <div className={styles.div}>
          <p className={styles.p}>1.</p>
        </div>
        <div className={styles.div2}>2.</div>
        <div className={styles.div2}>2.</div>
        <div className={styles.div4}>
          <p className={styles.p}>3.</p>
        </div>
        <div className={styles.div4}>
          <p className={styles.p}>3.</p>
        </div>
        <div className={styles.itemGingerContainer}>
          <p className={styles.p}>
            <span>
              <b className={styles.item}>Item :</b>
              <span> Ginger pickle</span>
            </span>
            <span>
              <span className={styles.span}>{` `}</span>
            </span>
          </p>
          <p className={styles.quantity12kg}>
            <span>
              <b>Quantity :</b>
              <span className={styles.item}> 12Kg</span>
            </span>
          </p>
        </div>
        <div className={styles.itemGingerContainer}>
          <p className={styles.p}>
            <span>
              <b className={styles.item}>Item :</b>
              <span> Ginger pickle</span>
            </span>
            <span>
              <span className={styles.span}>{` `}</span>
            </span>
          </p>
          <p className={styles.quantity12kg}>
            <span>
              <b>Quantity :</b>
              <span className={styles.item}> 12Kg</span>
            </span>
          </p>
        </div>
        <div className={styles.itemTomatoContainer}>
          <p className={styles.p}>
            <span>
              <b className={styles.item}>Item :</b>
              <span> Tomato pickle</span>
            </span>
            <span>
              <span className={styles.span}>{` `}</span>
            </span>
          </p>
          <p className={styles.quantity12kg}>
            <span>
              <b>Quantity :</b>
              <span className={styles.item}> 16Kg</span>
            </span>
          </p>
        </div>
        <div className={styles.itemTomatoContainer}>
          <p className={styles.p}>
            <span>
              <b className={styles.item}>Item :</b>
              <span> Tomato pickle</span>
            </span>
            <span>
              <span className={styles.span}>{` `}</span>
            </span>
          </p>
          <p className={styles.quantity12kg}>
            <span>
              <b>Quantity :</b>
              <span className={styles.item}> 16Kg</span>
            </span>
          </p>
        </div>
        <img className={styles.tomato1Icon} alt="" src="/tomato-1@2x.png" />
        <img className={styles.tomato1Icon} alt="" src="/tomato-1@2x.png" />
        <img className={styles.ginger2Icon} alt="" src="/ginger-2@2x.png" />
        <img className={styles.ginger2Icon} alt="" src="/ginger-2@2x.png" />
        <img className={styles.ginger1Icon} alt="" src="/ginger-1@2x.png" />
        <img className={styles.ginger1Icon} alt="" src="/ginger-1@2x.png" />
        <div className={styles.accept1}>
          <div className={styles.accept1Child} />
          <div className={styles.acceptOrder}>
            <p className={styles.p}>Accept</p>
            <p className={styles.p}>order</p>
          </div>
        </div>
        <div className={styles.accept1}>
          <div className={styles.accept1Child} />
          <div className={styles.acceptOrder}>
            <p className={styles.p}>Accept</p>
            <p className={styles.p}>order</p>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.accept1Child} />
          <div className={styles.acceptOrder2}>
            <p className={styles.p}>Accept</p>
            <p className={styles.p}>order</p>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.accept1Child} />
          <div className={styles.acceptOrder2}>
            <p className={styles.p}>Accept</p>
            <p className={styles.p}>order</p>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.acceptOrder4}>
            <p className={styles.p}>Accept</p>
            <p className={styles.p}>order</p>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.acceptOrder4}>
            <p className={styles.p}>Accept</p>
            <p className={styles.p}>order</p>
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-54.svg"
          />
          <div className={styles.popularChoices}>Popular Choices</div>
        </div>
        <img className={styles.personIcon} alt="" src="/person-icon.svg" />
        <img className={styles.cartIcon} alt="" src="/cart-icon6.svg" />
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <div className={styles.lijjatPapadByContainer}>
          <p className={styles.p}>
            <b className={styles.item}>Lijjat Papad</b>
            <span> by Shri Mahila Griha Udyog</span>
          </p>
        </div>
        <div className={styles.lijjatPapadByContainer}>
          <p className={styles.p}>
            <b className={styles.item}>Lijjat Papad</b>
            <span> by Shri Mahila Griha Udyog</span>
          </p>
        </div>
        <div className={styles.specialMangoAacharContainer}>
          <b>{`Special Mango Aachar `}</b>
          <span>by JhaJi Taste of Mithila</span>
        </div>
        <div className={styles.amulCowMilkContainer}>
          <b>{`Amul Cow Milk `}</b>
          <span>by Amul Pvt Ltd</span>
        </div>
        <div className={styles.rs340ForContainer}>
          <b>{`Rs. 340 `}</b>
          <span>for</span>
          <b> 1 Kg</b>
        </div>
        <div className={styles.rs56ForContainer}>
          <b>{`Rs. 56 `}</b>
          <span>for</span>
          <b> 1 L</b>
        </div>
        <div className={styles.rs800ForContainer}>
          <b>{`Rs. 800 `}</b>
          <span>for</span>
          <b> 1 Kg</b>
        </div>
        <div className={styles.consumerLandingPageItem} />
        <div className={styles.optons}>114 optons</div>
        <div className={styles.optons1}>114 optons</div>
        <div className={styles.optons2}>5 optons</div>
        <div className={styles.newBrands} onClick={onNewBrandsContainerClick}>
          <div className={styles.myCart2}>New Brands</div>
        </div>
        <div
          className={styles.popularBrands} onClick={onPopularBrandsContainerClick}>
          <div className={styles.myCart2}>Popular Brands</div>
        </div>
        <div className={styles.offers} onClick={onOffersContainerClick}>
          <div className={styles.myCart2}>
            <p className={styles.p}>Offers</p>
          </div>
        </div>
        <div className={styles.accept12} onClick={onAccept1Container2Click}>
          <div className={styles.accept1Inner} />
          <div className={styles.addToCart}>Add to Cart</div>
        </div>
        <div className={styles.accept13} onClick={onAccept1Container3Click}>
          <div className={styles.accept1Inner} />
          <div className={styles.addToCart}>Add to Cart</div>
        </div>
        <div className={styles.accept14} onClick={onAccept1Container4Click}>
          <div className={styles.accept1Inner} />
          <div className={styles.addToCart}>Add to Cart</div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector21.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector22.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector23.svg" />
        <div className={styles.div6}>30</div>
        <div className={styles.div7}>30</div>
        <div className={styles.div8}>30</div>
        <img className={styles.phplusFillIcon} alt="" src="/phplusfill.svg" />
        <img className={styles.phplusFillIcon1} alt="" src="/phplusfill1.svg" />
        <img className={styles.phplusFillIcon2} alt="" src="/phplusfill2.svg" />
        <div className={styles.untitledDesign1} />
        <img className={styles.image5Icon} alt="" src="/image-52@2x.png" />
        <img className={styles.image7Icon} alt="" src="/image-71@2x.png" />
        <img className={styles.image8Icon} alt="" src="/image-81@2x.png" />
        <div className={styles.consumerLandingPageInner} />
        <div className={styles.consumerLandingPageChild1} />
        <div className={styles.consumerLandingPageInner1}>
          <div className={styles.componentChild} />
        </div>
        <div className={styles.popularChoices1}>
          <div className={styles.myCart2}>Popular Choices</div>
        </div>
        <div className={styles.optons3}>114 optons</div>
        <img className={styles.image6Icon} alt="" src="/image-63@2x.png" />
        <img className={styles.vectorIcon3} alt="" src="/vector24.svg" />
        <img className={styles.lineIcon} alt="" src="/line-21.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector25.svg" />
        <div className={styles.search1} onClick={onSearchTextClick}>
          Search
        </div>
      </div>
    </div>
  );
};

export default ConsumerLandingPage;
