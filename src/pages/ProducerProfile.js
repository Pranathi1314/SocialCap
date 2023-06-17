import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerProfile.css";
const ProducerProfile = () => {
  const navigate = useNavigate();

  const onAccept1ContainerClick = useCallback(() => {
    navigate("/producer-edit-profile");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/producer-prodcuts");
  }, [navigate]);

  return (
    <div className="producer-profile">
      <div className="producer-profile-child" />
      <img
        className="emojione-monotoneletter-s-icon7"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />
      <div className="help6">Help</div>
      <div className="my-profile8">My Profile</div>
      <div className="accept16" onClick={onAccept1ContainerClick}>
        <div className="accept1-child4" />
        <div className="edit-details1">
          <p className="company-wilson">Edit</p>
          <p className="company-wilson">details</p>
        </div>
      </div>
      <div className="accept17">
        <div className="accept1-child4" />
        <div className="log-out1">LOG OUT</div>
      </div>
      <img className="producer-profile-item" alt="" src="/group-3.svg" />
      <img className="help-icon5" alt="" src="/help-icon2.svg" />
      <img className="person-icon5" alt="" src="/person-icon.svg" />
      <div className="my-products-container" onClick={onGroupContainerClick}>
        <div className="my-products2">My Products</div>
        <img className="cart-icon2" alt="" src="/cart-icon1.svg" />
      </div>
      <div className="my-profile9">My Profile</div>
      <div className="producer-profile-inner" />
      <div className="producer-profile-child1" />
      <div className="ginger-1-frame">
        <img className="ginger-1-icon4" alt="" src="/ginger-1@2x.png" />
      </div>
      <div className="producer-profile-child2" />
      <div className="company-wilson-container">
        <p className="company-wilson">Company : Wilson pickles</p>
        <p className="company-wilson">&nbsp;</p>
        <p className="company-wilson">Name : Tim Wilson</p>
        <p className="company-wilson">&nbsp;</p>
        <p className="company-wilson">UserID : timwpickles@gmail.com</p>
        <p className="company-wilson">&nbsp;</p>
        <p className="company-wilson">Password : *******</p>
        <p className="company-wilson">&nbsp;</p>
      </div>
      <img className="company2-1-icon" alt="" src="/company2-1@2x.png" />
      <img className="mask-group-icon6" alt="" src="/mask-group.svg" />
    </div>
  );
};

export default ProducerProfile;
