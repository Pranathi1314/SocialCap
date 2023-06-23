import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerProdcuts.css";
const ProducerProdcuts = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/producer-profile");
  }, [navigate]);

  const onEditDetailsGrpClick = useCallback(() => {
    navigate("/producer-edit-products");
  }, [navigate]);

  const onBackIconClick = useCallback(() => {
    navigate("/producer-landing-page");
  }, [navigate]);

  const onAddProductClick = useCallback(() => {
    navigate("/add-products");
  }, [navigate]);

  return (
    <div className="producer-prodcuts">
      <div className="producer-prodcuts-child" />
      <div className="producer-prodcuts-item" />
      <img
        className="emojione-monotoneletter-s-icon3"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />
      <div className="help2">Help</div>
      <div className="my-products1">My Products</div>
      <div className="person-icon-parent" onClick={onGroupContainerClick}>
        <img className="person-icon2" alt="" src="/person-icon.svg" />
        <div className="my-profile3">My Profile</div>
      </div>
      <img className="mango-1-icon1" alt="" src="/mango-11@2x.png" />
      <div className="div">
        <p className="name-mango-pickle">1.</p>
      </div>
      <div className="div1">2.</div>
      <img className="tomato-1-icon" alt="" src="/tomato-1@2x.png" />
      <div className="button-add-product" onClick={onAddProductClick}>
          <p className="add-text">Add product</p>
      </div>
      <div className="vector-group">
        <img className="group-item" alt="" src="/group-3.svg" />
        <div className="my-products2">My Products</div>

      </div>
      <img className="help-icon2" alt="" src="/help-icon1.svg" />
      <img className="cart-icon1" alt="" src="/cart-icon.svg" />
      <div className="name-mango-container">
        <p className="name-mango-pickle">
          <b className="market-price">Name :</b>
          <span>{` Mango pickle `}</span>
        </p>
        <p className="name-mango-pickle">
          <b>&nbsp;</b>
        </p>
        <p className="name-mango-pickle">
          <b>Max qty :</b>
          <span className="market-price"> 20Kg</span>
        </p>
        <p className="name-mango-pickle">&nbsp;</p>
        <p className="name-mango-pickle">
          <b className="market-price">{`Market price : `}</b>
          <span>{` Rs.150/ Kg                    `}</span>
          <b className="market-price"> Selling price :</b>
          <span className="market-price">{` Rs. 120/kg `}</span>
        </p>
        <p className="name-mango-pickle">&nbsp;</p>
        <p className="name-mango-pickle">
          <b className="market-price">{`Raw materials (per Kg): `}</b>
          <span>
            Raw mangoes (1Kg), salt(12.6g), Turmeric(4.2g), Mustard oil(120mL)
          </span>
        </p>
        <p className="name-mango-pickle">&nbsp;</p>
      </div>
      <div className="name-tomato-container">
        <p className="name-mango-pickle">
          <b className="market-price">Name :</b>
          <span> Tomato pickle</span>
        </p>
        <p className="name-mango-pickle">
          <b>&nbsp;</b>
        </p>
        <p className="name-mango-pickle">
          <b>Max qty :</b>
          <span className="market-price"> 20Kg</span>
        </p>
        <p className="name-mango-pickle">&nbsp;</p>
        <p className="name-mango-pickle">
          <b className="market-price">{`Market price : `}</b>
          <span>{` Rs.150/ Kg                    `}</span>
          <b className="market-price"> Selling price :</b>
          <span className="market-price">{` Rs. 120/kg `}</span>
        </p>
        <p className="name-mango-pickle">&nbsp;</p>
        <p className="name-mango-pickle">
          <b className="market-price">{`Raw materials (per Kg): `}</b>
          <span>
            Raw tomatoes (1Kg), salt(12.6g), Turmeric(4.2g), Mustard oil(120mL),
            Red chillli (10g)
          </span>
        </p>
        <p className="name-mango-pickle">&nbsp;</p>
      </div>
      <div className="accept13">
        <div className="accept1-child1" />
      </div>
      <div className="edit-details-grp" onClick={onEditDetailsGrpClick}>
        <div className="accept14">
          <div className="accept1-child1" />
        </div>


        <div className="edit-details1">
          <p className="name-mango-pickle">Edit</p>
          <p className="name-mango-pickle">details</p>
        </div>
      </div>

      <div className="edit-details2">
        <p className="name-mango-pickle">Edit</p>
        <p className="name-mango-pickle">details</p>
      </div>

      <img
        className="back-icon"
        alt=""
        src="/mask-group.svg"
        onClick={onBackIconClick}
      />
    </div>


  );
};

export default ProducerProdcuts;
