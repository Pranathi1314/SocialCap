import "./SupplierAcceptOrder.css";
const SupplierAcceptOrder = () => {
  return (
    <div className="supplier-accept-order">
      <div className="supplier-accept-order-child" />
      <img
        className="emojione-monotoneletter-s-icon5"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />
      <div className="help4">Help</div>
      <div className="my-profile5">My Profile</div>
      <img className="supplier-accept-order-item" alt="" src="/group-31.svg" />
      <img className="help-icon3" alt="" src="/help-icon2.svg" />
      <img className="person-icon3" alt="" src="/person-icon.svg" />
      <div className="order-details1">Order details</div>
    
      <div className="ginger-1-container">
        <img className="ginger-1-icon2" alt="" src="/ginger-1@2x.png" />
      </div>
      <div className="supplier-accept-order-inner" />
      
      <div className="item-olive-container">
        <p className="item-olive-oil">
          <b className="item1">Item :</b>
          <span> Olive Oil</span>
        </p>
        
      </div>
      <div className="mango-3" />
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <div className="accept14">
        <div className="accept1-child2" />
      </div>
      <div className="supply-raw-material-container">
        <p className="item-olive-oil">{`Supply Raw Material `}</p>
         
      </div>
      
      
    
      <div className="quantity">Quantity</div>

      
      <div className="cost-per-unit">Cost Per Unit</div>
      <div className="total-cost">Total Cost</div>
      <div className="div"><input type="text" pattern="[0-9]*" title="Please enter only numbers" /></div>
     
      <div className="div1"><input type="text" pattern="[0-9]*" title="Please enter only numbers" /></div>
      
      
      <div className="div2"><input type="text" pattern="[0-9]*" title="Please enter only numbers" /></div>
    </div>
  );
};

export default SupplierAcceptOrder;
