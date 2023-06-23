import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerProfile.css";
const ProducerProfile = () => {
  const navigate = useNavigate();

  const onEditDetailsGrpClick = useCallback(() => {
    navigate("/producer-edit-profile");
  }, [navigate]);

  const onLogoutButtonContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/producer-prodcuts");
  }, [navigate]);

  const onMaskGroupIconClick = useCallback(() => {
    navigate("/producer-landing-page");
  }, [navigate]);

  return (
    <div className="producer-profile">
      <div className="producer-profile-child" />
      <img
        className="emojione-monotoneletter-s-icon8"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />
      <div className="help8">Help</div>
      <div className="my-profile10">My Profile</div>
      <div className="edit-details-grp1" onClick={onEditDetailsGrpClick}>
        <div className="edit-details-grp-child" />
        <div className="edit-details3">
          <p className="company-wilson">Edit</p>
          <p className="company-wilson">details</p>
        </div>
      </div>
      <div className="logout-button" onClick={onLogoutButtonContainerClick}>
        <div className="edit-details-grp-child" />
        <div className="log-out1">LOG OUT</div>
      </div>
      <img className="producer-profile-item" alt="" src="/group-3.svg" />
      <img className="help-icon7" alt="" src="/help-icon1.svg" />
      <img className="person-icon7" alt="" src="/person-icon.svg" />
      <div className="my-products-container" onClick={onGroupContainerClick}>
        <div className="my-products5">My Products</div>
        <img className="cart-icon4" alt="" src="/cart-icon.svg" />
      </div>
      <div className="my-profile11">My Profile</div>
      <div className="producer-profile-inner" />
      <div className="producer-profile-child1" />
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
      <img
        className="mask-group-icon5"
        alt=""
        src="/mask-group.svg"
        onClick={onMaskGroupIconClick}
      />
    </div>
  );
};

export default ProducerProfile;
