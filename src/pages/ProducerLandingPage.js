import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerLandingPage.css";
const ProducerLandingPage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/producer-profile");
  }, [navigate]);

  const onAcceptOrderGroupClick = useCallback(() => {
    navigate("/producer-accept-order");
  }, [navigate]);

  const onMyProductsGroupClick = useCallback(() => {
    navigate("/producer-prodcuts");
  }, [navigate]);

  return (
    <div className="producer-landing-page">
      <div className="producer-landing-page-child" />
      <img
        className="emojione-monotoneletter-s-icon9"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />
      <img className="mango-1-icon2" alt="" src="/mango-12@2x.png" />
      <div className="div5">
        <p className="item-ginger-pickle">1.</p>
      </div>
      <div className="div6">2.</div>
      <div className="div7">
        <p className="item-ginger-pickle">3.</p>
      </div>
      <div className="item-mango-container1">
        <p className="item-ginger-pickle">
          <span>
            <b className="item2">Item :</b>
            <span> Mango pickle</span>
          </span>
          <span>
            <span className="span">{` `}</span>
          </span>
        </p>
        <p className="quantity-12kg">
          <span>
            <b>Quantity :</b>
            <span className="item2"> 20Kg</span>
          </span>
        </p>
      </div>
      <div className="item-ginger-container">
        <p className="item-ginger-pickle">
          <span>
            <b className="item2">Item :</b>
            <span> Ginger pickle</span>
          </span>
          <span>
            <span className="span">{` `}</span>
          </span>
        </p>
        <p className="quantity-12kg">
          <span>
            <b>Quantity :</b>
            <span className="item2"> 12Kg</span>
          </span>
        </p>
      </div>
      <div className="item-tomato-container">
        <p className="item-ginger-pickle">
          <span>
            <b className="item2">Item :</b>
            <span> Tomato pickle</span>
          </span>
          <span>
            <span className="span">{` `}</span>
          </span>
        </p>
        <p className="quantity-12kg">
          <span>
            <b>Quantity :</b>
            <span className="item2"> 16Kg</span>
          </span>
        </p>
      </div>
      <img className="tomato-1-icon1" alt="" src="/tomato-11@2x.png" />
      <img className="ginger-2-icon" alt="" src="/ginger-2@2x.png" />
      <div className="my-profile-container" onClick={onGroupContainerClick}>
        <div className="my-profile12">My Profile</div>
        <img className="person-icon8" alt="" src="/person-icon.svg" />
      </div>
      <div className="accept-order-group" onClick={onAcceptOrderGroupClick}>
        <div className="accept-order-group-child" />
        <div className="accept-order">
          <p className="item-ginger-pickle">Accept</p>
          <p className="item-ginger-pickle">order</p>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="accept-order-group-child" />
        <div className="accept-order1">
          <p className="item-ginger-pickle">Accept</p>
          <p className="item-ginger-pickle">order</p>
        </div>
      </div>
      <div className="rectangle-group">
        <div className="group-child1" />
        <div className="accept-order2">
          <p className="item-ginger-pickle">Accept</p>
          <p className="item-ginger-pickle">order</p>
        </div>
      </div>
      <div className="vector-container">
        <img className="group-child2" alt="" src="/group-3.svg" />
        <div className="orders-received">Orders received</div>
      </div>
      <div className="help9">Help</div>
      <img className="help-icon8" alt="" src="/help-icon1.svg" />
      <div className="my-products-group1" onClick={onMyProductsGroupClick}>
        <div className="my-products6">My Products</div>
        <img className="cart-icon5" alt="" src="/cart-icon1.svg" />
      </div>
    </div>
  );
};

export default ProducerLandingPage;
