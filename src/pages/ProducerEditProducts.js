import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerEditProducts.css";
const ProducerEditProducts = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/producer-profile");
  }, [navigate]);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/producer-prodcuts");
  }, [navigate]);

  return (
    <div className="producer-edit-products">
      <div className="producer-edit-products-child" />
      <div className="producer-edit-products-item" />
      <div className="producer-edit-products-inner" />
      <img
        className="emojione-monotoneletter-s-icon2"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />
      <div className="help1">Help</div>
      <div className="my-products">My Products</div>
      <img className="mango-1-icon" alt="" src="/mango-1@2x.png" />
      <div className="vector-parent">
        <img className="group-child" alt="" src="/group-3.svg" />
        <div className="product-details">Product details</div>
      </div>
      <img className="help-icon1" alt="" src="/help-icon1.svg" />
      <div className="my-profile-parent" onClick={onGroupContainer1Click}>
        <div className="my-profile2">My Profile</div>
        <img className="person-icon1" alt="" src="/person-icon.svg" />
      </div>
      <img className="cart-icon" alt="" src="/cart-icon.svg" />
      <div className="new-name-container">
        <p className="new-name-mango-pickle">
          <b className="new-name">New name :</b>
          <span>{` Mango pickle `}</span>
        </p>
        <p className="new-name-mango-pickle">
          <b>&nbsp;</b>
        </p>
        <p className="new-name-mango-pickle">
          <b>New max qty :</b>
          <span className="new-name"> 20Kg</span>
        </p>
        <p className="new-name-mango-pickle">&nbsp;</p>
        <p className="new-name-mango-pickle">
          <b className="new-name">{`New Market price : `}</b>
          <span>{` Rs.150/ Kg                 `}</span>
        </p>
        <p className="new-name-mango-pickle">
          <b>&nbsp;</b>
        </p>
        <p className="new-name-mango-pickle">
          <b>New Selling price :</b>
          <span className="new-name">{` Rs. 120/kg `}</span>
        </p>
        <p className="new-name-mango-pickle">&nbsp;</p>
        <p className="new-name-mango-pickle">
          <b className="new-name">{`Edit raw materials (per Kg): `}</b>
          <span>
            Raw mangoes (1Kg), salt(12.6g), Turmeric(4.2g), Mustard oil(120mL)
          </span>
        </p>
        <p className="new-name-mango-pickle">&nbsp;</p>
      </div>
      <div className="accept1-parent">
        <div className="accept12">
          <div className="accept1-inner" />
        </div>
        <div className="save-details">
          <p className="new-name-mango-pickle">Save</p>
          <p className="new-name-mango-pickle"> details</p>
        </div>
      </div>
      <img
        className="back-button-icon"
        alt=""
        src="/mask-group.svg"
        onClick={onBackButtonIconClick}
      />
      <div className="insert-new-image">{`Insert new image `}</div>
      <img className="group-icon" alt="" src="/group-19.svg"/>
    </div>
  );
};

export default ProducerEditProducts;
