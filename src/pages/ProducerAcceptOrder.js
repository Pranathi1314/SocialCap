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

  const onBackButtonIconClick = useCallback(() => {
    navigate("/producer-landing-page");
  }, [navigate]);

  const placeOrder = useCallback(() => {
    alert("Order for raw materials has been placed.");
    //alert should also display the ordered items with quantities
    navigate("/producer-landing-page");
    //accept order button on landing page should now change to order accepted.
  }, [navigate]);
  
  return (
    <div className="producer-accept-order">
      <div className="producer-accept-order-child" />
      <img className="emojione-monotoneletter-s-icon6" alt="" src="/emojionemonotoneletters1.svg"/>

      <div>
        <div className="help6">Help</div>
        <img className="help-icon5" alt="" src="/help-icon1.svg" />
      </div>

      <div className="my-products-group" onClick={onGroupContainerClick}>
        <div className="my-products4">My Products</div>
        <img className="cart-icon3" alt="" src="/cart-icon1.svg" />
      </div>

      <div className="my-profile-group" onClick={onGroupContainer1Click}>
        <div className="my-profile8">My Profile</div>
        <img className="person-icon5" alt="" src="/person-icon.svg" />
      </div>

      <div className="producer-accept-order-item"></div>
      <img className="back-button-icon1" alt="" src="/mask-group.svg" onClick={onBackButtonIconClick}/>
      <div className="order-details">Order details</div>
      
      <div className="producer-accept-order-inner" />
      
      <div className="item-mango-container">
        <p className="item-mango-pickle"><b>Item :</b> Mango Pickle</p>
        <p className="item-mango-pickle"><b>Quantity :</b> 20Kg</p>
      </div>

      <img className="mango-icon" alt="" src="/mango@2x.png" />



      <div className="estimated-raw-materials-container">
        <p className="item-mango-pickle"><b>Estimated raw materials required :</b></p>
        <hr></hr>

        <a className="item-mango-pickle"> &nbsp; Raw mangoes : 20Kg &nbsp; </a>
        <select id="dropdown">
          <option selected disabled> &nbsp; Adjust order quantity </option>
          <option>0Kg</option>
          <option>5Kg</option>
          <option>10Kg</option>
          <option>12Kg</option>
          <option>15Kg</option>
          <option>18Kg</option>
          <option>20kg</option>
          <option>25Kg</option>
        </select>
        <hr></hr>  

        <a className="item-mango-pickle"> &nbsp; Salt 252g &nbsp; </a>
        <select id="dropdown" required>
          <option selected disabled> &nbsp; Adjust order quantity </option>
          <option>0g</option>
          <option>100g</option>
          <option>250g</option>
          <option>500g</option>
          <option>1Kg</option>
          <option>2Kg</option>
          <option>5kg</option>
        </select>
        <hr></hr>

        <a className="item-mango-pickle"> &nbsp; Turmeric 84g &nbsp; </a>
        <select id="dropdown" required>
          <option selected disabled> &nbsp; Adjust order quantity </option>
          <option>0g</option>
          <option>100g</option>
          <option>250g</option>
          <option>500g</option>
          <option>1Kg</option>
          <option>2Kg</option>
          <option>5kg</option>
        </select>
        <hr></hr>

        <a className="item-mango-pickle"> &nbsp; Mustard oil 2.4L &nbsp; </a>
        <select id="dropdown" required>
          <option selected disabled> &nbsp; Adjust order quantity </option>
          <option>0mL</option>
          <option>200mL</option>
          <option>500mL</option>
          <option>1L</option>
          <option>2L</option>
          <option>5L</option>
          <option>10L</option>
        </select>
        <hr></hr>
      </div>


      <div className="accept-group" onClick={placeOrder}>
        <div className="accept1-group2">
          <p className="accept-text">Order raw materials</p>
        </div>
      </div>
    
    
    </div>
  );
};

export default ProducerAcceptOrder;
