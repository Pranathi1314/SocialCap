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

  const addProductalert = useCallback(() => {
    alert("Product has been added to My Products.");
    //alert should also display the ordered items with quantities
    navigate("/producer-prodcuts");
    //accept order button on landing page should now change to order accepted.
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
        <div className="product-details">Add Product</div>
      </div>
      <img className="help-icon1" alt="" src="/help-icon1.svg" />
      <div className="my-profile-parent" onClick={onGroupContainer1Click}>
        <div className="my-profile2">My Profile</div>
        <img className="person-icon1" alt="" src="/person-icon.svg" />
      </div>
      <img className="cart-icon" alt="" src="/cart-icon.svg" />

      <div className="new-company-container">
        <p className="new-company">
          <label>Product name : <input type="text" name="company-name" required></input></label>
        </p><br/>
        <p className="new-company">
          <label>Max. quantity produced : <input type="text" name="company-name" required></input></label>
        </p><br/>
        <p className="new-company">
          <label>Market price : <input type="email" name="producer-email" required></input></label>
        </p><br/>
        <p className="new-company">
          <label>Selling price : <input type="email" name="producer-email" required></input></label>
        </p><br/>
        <p className="new-company">
          <label>Enter raw materials(per Kg) : <input type="text" name="company-name" required></input></label>
        </p><br/>
      </div>

      <div className="accept1-parent"  onClick={addProductalert}>
        <div className="accept12">
          <div className="accept1-inner" />
        </div>
        <div className="save-details">
          <p className="new-name-mango-pickle">Add</p>
          <p className="new-name-mango-pickle"> product</p>
        </div>
      </div>
      <img
        className="back-button-icon"
        alt=""
        src="/mask-group.svg"
        onClick={onBackButtonIconClick}
      />
      <div className="insert-new-image">{`Insert new image `}</div>
      <img className="group-icon" alt="" src="/group-19.svg" />
    </div>
  );
};

export default ProducerEditProducts;
