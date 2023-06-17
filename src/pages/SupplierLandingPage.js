import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SupplierLandingPage.css";
const SupplierLandingPage = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/supplier-profile");
  }, [navigate]);

  const onAccept1ContainerClick = useCallback(() => {
    navigate("/supplier-accept-order");
  }, [navigate]);

  return (
    <div className="supplier-landing-page">
      <div className="supplier-landing-page-child" />
      <img
        className="emojione-monotoneletter-s-icon10"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />
      <div className="help9">Help</div>
      <div className="div8">
        <p className="item-tomato">1.</p>
      </div>
      <div className="div9">2.</div>
      <div className="div10">
        <p className="item-tomato">3.</p>
      </div>
      <div className="item-olive-container1">
        <p className="item-tomato">
          <span>
            <b className="litre">Item :</b>
            <span> Olive Oil</span>
          </span>
        </p>
        <p className="required-quantity-50-litre">
          <span>
            <b>Required Quantity :</b>
            <span className="litre"> 50 Litre</span>
          </span>
        </p>
      </div>
      <div className="item-tomato-container1">
        <p className="item-tomato">
          <span>
            <b className="litre">Item :</b>
            <span> Tomato</span>
          </span>
          <span>
            <span className="span3">{` `}</span>
          </span>
        </p>
        <p className="required-quantity-50-litre">
          <span>
            <b>Quantity :</b>
            <span className="litre"> 15Kg</span>
          </span>
        </p>
      </div>
      <div className="item-mango-container2">
        <p className="item-tomato">
          <span>
            <b className="litre">Item :</b>
            <span> Mango</span>
          </span>
        </p>
        <p className="required-quantity-50-litre">
          <span>
            <b>Quantity :</b>
            <span className="litre"> 20Kg</span>
          </span>
        </p>
      </div>
      <img className="mango-raw-icon" alt="" src="/mango-raw@2x.png" />
      <img className="tomato1-icon" alt="" src="/tomato1@2x.png" />
      <div className="vector-container">
        <img className="group-child5" alt="" src="/group-3.svg" />
        <div className="raw-material-order-wrapper">
          <div className="raw-material-order">Raw Material Order</div>
        </div>
      </div>
      <img className="help-icon8" alt="" src="/help-icon2.svg" />
      <div className="my-profile-container" onClick={onGroupContainer1Click}>
        <div className="my-profile12">My Profile</div>
        <img className="person-icon8" alt="" src="/person-icon.svg" />
      </div>
      <img className="olive-oil-icon" alt="" src="/olive-oil@2x.png" />
      <div className="accept114" onClick={onAccept1ContainerClick}>
        <div className="accept2-child" />
        <div className="supply">Supply</div>
      </div>
      <div className="accept21">
        <div className="accept2-child" />
        <div className="supply">Supply</div>
      </div>
      <div className="accept31">
        <div className="accept2-child" />
        <div className="supply">Supply</div>
      </div>
    </div>
  );
};

export default SupplierLandingPage;
