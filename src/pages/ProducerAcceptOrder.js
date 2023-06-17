import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerAcceptOrder.css";
const ProducerAcceptOrder = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/producer-prodcuts");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/producer-profile");
  }, [navigate]);

  return (
    <div className="producer-accept-order">
      <div className="producer-accept-order-child" />
      <img
        className="emojione-monotoneletter-s-icon3"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />
      <div className="help3">Help</div>
      <div className="my-products-parent" onClick={onGroupContainerClick}>
        <div className="my-products">My Products</div>
        <img className="cart-icon" alt="" src="/cart-icon.svg" />
      </div>
      <div className="my-profile-parent" onClick={onGroupContainer1Click}>
        <div className="my-profile4">My Profile</div>
        <img className="person-icon2" alt="" src="/person-icon.svg" />
      </div>
      <img className="producer-accept-order-item" alt="" src="/group-31.svg" />
      <img className="help-icon2" alt="" src="/help-icon2.svg" />
      <div className="order-details">Order details</div>
      <div className="producer-accept-order-inner" />
      <div className="item-mango-container">
        <p className="item-mango-pickle">
          <b className="item">Item :</b>
          <span> Mango Pickle</span>
        </p>
        <p className="item-mango-pickle">
          <b>Quantity :</b>
          <span className="item"> 20Kg</span>
        </p>
        <p className="item-mango-pickle">&nbsp;</p>
      </div>
      <img className="mango-3-icon" alt="" src="/mango-3@2x.png" />
      <div className="estimated-raw-materials-container">
        <p className="item-mango-pickle">
          <span>
            <b>{`Estimated raw materials : `}</b>
          </span>
        </p>
        <p className="item-mango-pickle">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="item-mango-pickle">
          <span>
            <span>Raw mangoes 20Kg</span>
          </span>
        </p>
        <p className="item-mango-pickle">
          <span>
            <span>Salt 252g</span>
          </span>
        </p>
        <p className="item-mango-pickle">
          <span>
            <span>{`Turmeric                    84g `}</span>
          </span>
        </p>
        <p className="item-mango-pickle">
          <span>
            <span>Mustard oil 2.4L</span>
          </span>
        </p>
        <p className="blank-line14">
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
      </div>
      <div className="accept1-parent">
        <div className="accept13">
          <div className="accept1-child1" />
        </div>
        <div className="order-raw-materials-container">
          <p className="item-mango-pickle">order raw</p>
          <p className="item-mango-pickle"> materials</p>
        </div>
      </div>
      <img className="vector-icon6" alt="" src="/vector3.svg" />
      <img className="vector-icon7" alt="" src="/vector3.svg" />
      <img className="vector-icon8" alt="" src="/vector3.svg" />
      <img className="vector-icon9" alt="" src="/vector3.svg" />
      <img className="phplus-fill-icon" alt="" src="/phplusfill.svg" />
      <img className="phplus-fill-icon1" alt="" src="/phplusfill.svg" />
      <img className="phplus-fill-icon2" alt="" src="/phplusfill.svg" />
      <img className="phplus-fill-icon3" alt="" src="/phplusfill.svg" />
      <img className="back-icon" alt="" src="/mask-group.svg" />
    </div>
  );
};

export default ProducerAcceptOrder;
