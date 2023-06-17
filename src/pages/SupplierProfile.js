import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SupplierProfile.css";
const SupplierProfile = () => {
  const navigate = useNavigate();

  const onAccept1ContainerClick = useCallback(() => {
    navigate("/supplier-edit-profile");
  }, [navigate]);

  return (
    <div className="supplier-profile">
      <div className="supplier-profile-child" />
      <img
        className="emojione-monotoneletter-s-icon1"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />
      <div className="help">Help</div>
      <div className="my-profile">My Profile</div>
      <div className="accept1" onClick={onAccept1ContainerClick}>
        <div className="accept1-child" />
        <div className="edit-details">
          <p className="edit">Edit</p>
          <p className="edit">details</p>
        </div>
      </div>
      <div className="accept11">
        <div className="accept1-child" />
        <div className="log-out">LOG OUT</div>
      </div>
      <img className="supplier-profile-item" alt="" src="/group-3.svg" />
      <img className="help-icon" alt="" src="/help-icon.svg" />
      <img className="person-icon" alt="" src="/person-icon.svg" />
      <div className="my-profile1">My Profile</div>
      <div className="supplier-profile-inner" />
      <div className="frame-div" />
      <div className="ginger-1-wrapper">
        <img className="ginger-1-icon" alt="" src="/ginger-1@2x.png" />
      </div>
      <div className="supplier-profile-child1" />
      <div className="name-rajpal-container">
        <p className="edit">&nbsp;</p>
        <p className="edit">Name : Rajpal Singh</p>
        <p className="edit">&nbsp;</p>
        <p className="edit">UserID : Rajpalsingh@gmail.com</p>
        <p className="edit">&nbsp;</p>
        <p className="edit">Password : *******</p>
        <p className="edit">&nbsp;</p>
        <p className="edit">Address: Sector 20,Sindhi Society, Kurla</p>
        <p className="edit">&nbsp;</p>
      </div>
      <img className="mask-group-icon" alt="" src="/mask-group.svg" />
      <img className="company1-1-icon" alt="" src="/company1-1@2x.png" />
      <div className="supplier-profile-child2" />
    </div>
  );
};

export default SupplierProfile;
