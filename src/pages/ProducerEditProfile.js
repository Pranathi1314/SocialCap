import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerEditProfile.css";
const ProducerEditProfile = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/producer-prodcuts");
  }, [navigate]);

  return (
    <div className="producer-edit-profile">
      <div className="producer-edit-profile-child" />
      <img
        className="emojione-monotoneletter-s-icon6"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />
      <div className="help5">Help</div>
      <div className="my-profile6">My Profile</div>
      <img className="ginger-1-icon3" alt="" src="/ginger-1@2x.png" />
      <div className="accept15">
        <div className="accept1-child3" />
        <div className="save-details1">
          <p className="new-company">{`Save `}</p>
          <p className="new-company">details</p>
        </div>
      </div>
      <img className="producer-edit-profile-item" alt="" src="/group-3.svg" />
      <img className="help-icon4" alt="" src="/help-icon2.svg" />
      <div className="my-products-group" onClick={onGroupContainerClick}>
        <div className="my-products1">My Products</div>
        <img className="cart-icon1" alt="" src="/cart-icon1.svg" />
      </div>
      <img className="person-icon4" alt="" src="/person-icon.svg" />
      <div className="my-profile7">My Profile</div>
      <div className="producer-edit-profile-inner" />
      <div className="mdiplus-outline1" />
      <div className="producer-edit-profile-child1" />
      <div className="new-company-container">
        <p className="new-company">New company : The Little pickles</p>
        <p className="new-company">&nbsp;</p>
        <p className="new-company">New Name : Tim Wilson</p>
        <p className="new-company">&nbsp;</p>
        <p className="new-company">New UserID : thelittlepickles@gmail.com</p>
        <p className="new-company">&nbsp;</p>
        <p className="new-company">New Password : *******</p>
        <p className="new-company">&nbsp;</p>
        <p className="new-company">Confirm Password : *******</p>
        <p className="new-company">&nbsp;</p>
      </div>
      <img className="company1-1-icon2" alt="" src="/company1-11@2x.png" />
      <img className="group-icon1" alt="" src="/group1.svg" />
      <div className="insert-new-image1">{`Insert new image `}</div>
      <img className="vector-icon13" alt="" src="/vector2.svg" />
      <img className="mask-group-icon4" alt="" src="/mask-group.svg" />
      <img className="mask-group-icon5" alt="" src="/mask-group.svg" />
    </div>
  );
};

export default ProducerEditProfile;
