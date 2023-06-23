import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsumerMyCart.module.css";
const ConsumerMyCart = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Producer Prodcuts" to the project
  }, []);

  const onMaskGroupIconClick = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onEmojioneMonotoneletterSClick = useCallback(() => {
    navigate("/consumer-landing-page");
  }, [navigate]);

  const onAboutContainerClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/consumer-about");
  }, [navigate]);

  const onAccept1ContainerClick = useCallback(() => {
    navigate("/consumer-my-cart");
  }, [navigate]);

  const onAccept1Container1Click = useCallback(() => {
    navigate("/consumer-my-cart");
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
    <div className={styles.consumerMyCart}>
      <div className={styles.consumerMyCartChild} />
      <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
      <img className={styles.iconQuestionMarkCircle} alt="" src="/vector.svg" />
      <img className={styles.consumerMyCartItem} alt="" src="/line-2.svg" />
      <img className={styles.consumerMyCartInner} alt="" src="/line-31.svg" />
      <img className={styles.groupIcon} alt="" src="/group-12.svg" />
      <div className={styles.myCartParent} onClick={onGroupContainerClick}>
        <div className={styles.myCart}>My Cart</div>
        <img className={styles.cartIcon} alt="" src="/cart-icon3.svg" />
      </div>
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="/mask-group.svg"
        onClick={onMaskGroupIconClick}
      />
      <img
        className={styles.emojioneMonotoneletterSIcon}
        alt=""
        src="/emojionemonotoneletters1.svg"
        onClick={onEmojioneMonotoneletterSClick}
      />
      <div className={styles.about} onClick={onAboutContainerClick}>
        <div className={styles.about1} onClick={onAboutTextClick}>
          About
        </div>
      </div>
      <img className={styles.cartIcon1} alt="" src="/cart-icon4.svg" />
      <img className={styles.image17Icon} alt="" src="/image-171@2x.png" />
      <b className={styles.amulButter}>{`Amul Butter `}</b>
      <b className={styles.amulChocolate}>{`Amul Chocolate `}</b>
      <b className={styles.b}>₹2,456.00</b>
      <b className={styles.b1}>₹2,456.00</b>
      <b className={styles.b2}>₹4,912.00</b>
      <b className={styles.price}>Price</b>
      <div className={styles.inStock}>In Stock</div>
      <div className={styles.inStock1}>In Stock</div>
      <div
        className={styles.eligibleForFree}
      >{`Eligible  for Free Shipping `}</div>
      <div
        className={styles.eligibleForFree1}
      >{`Eligible  for Free Shipping `}</div>
      <div className={styles.quantity20}>{`Quantity:             `}</div>
      <div className={styles.quantity201}>{`Quantity:             `}</div>
      <img className={styles.vectorIcon2} alt="" src="/vector10.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector10.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector11.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector11.svg" />
      <div className={styles.accept1} onClick={onAccept1ContainerClick}>
        <div className={styles.accept1Child} />
        <div className={styles.addToCart}>Delete</div>
      </div>
      <div className={styles.accept11} onClick={onAccept1Container1Click}>
        <div className={styles.accept1Child} />
        <div className={styles.addToCart}>Delete</div>
      </div>
      <img className={styles.image22Icon} alt="" src="/image-22@2x.png" />
      <div className={styles.myProfile} onClick={onMyProfileContainerClick}>
        <div className={styles.myProfile1}>My Profile</div>
      </div>
      <div className={styles.myCart1} onClick={onMyCartContainerClick}>
        <div className={styles.myProfile1}>My Cart</div>
      </div>
      <div className={styles.search} onClick={onSearchTextClick}>
        Search
      </div>
    </div>
  );
};

export default ConsumerMyCart;
