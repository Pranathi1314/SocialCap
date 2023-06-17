import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerLandingPage.css";
const ProducerLandingPage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/producer-profile");
  }, [navigate]);

  const onAccept1ContainerClick = useCallback(() => {
    navigate("/producer-accept-order");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
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
      <div className="help8">Help</div>
      <img className="mango-1-icon1" alt="" src="/mango-11@2x.png" />
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
      <div className="my-profile-group" onClick={onGroupContainerClick}>
        <div className="my-profile11">My Profile</div>
        <img className="person-icon7" alt="" src="/person-icon.svg" />
      </div>
      <div className="accept113" onClick={onAccept1ContainerClick}>
        <div className="accept1-child11" />
        <div className="accept-order">
          <p className="item-ginger-pickle">Accept</p>
          <p className="item-ginger-pickle">order</p>
        </div>
      </div>
      <div className="group-div">
        <div className="accept1-child11" />
        <div className="accept-order1">
          <p className="item-ginger-pickle">Accept</p>
          <p className="item-ginger-pickle">order</p>
        </div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child3" />
        <div className="accept-order2">
          <p className="item-ginger-pickle">Accept</p>
          <p className="item-ginger-pickle">order</p>
        </div>
      </div>
      <div className="vector-group">
        <img className="group-child4" alt="" src="/group-3.svg" />
        <div className="orders-received">Orders received</div>
      </div>
      <img className="help-icon7" alt="" src="/help-icon2.svg" />
      <div className="my-products-parent1" onClick={onGroupContainer4Click}>
        <div className="my-products5">My Products</div>
        <img className="cart-icon4" alt="" src="/cart-icon.svg" />
      </div>
    </div>
  );
};

export default ProducerLandingPage;
