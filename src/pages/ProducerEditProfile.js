import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerEditProfile.css";
const ProducerEditProfile = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/producer-prodcuts");
  }, [navigate]);

  const onMaskGroupIconClick = useCallback(() => {
    navigate("/producer-profile");
  }, [navigate]);

  return (
    <div className="producer-edit-profile">
      <div className="producer-edit-profile-child" />
      <img
        className="emojione-monotoneletter-s-icon5"
        alt=""
        src="/emojionemonotoneletters1.svg"
      />

      <div>
        <img className="help-icon4" alt="" src="/help-icon1.svg" />
        <div className="help5">Help</div>
      </div>
      
      <div className="my-profile6">My Profile</div>
      <div className="save-details-button">
        <div className="save-details-button-child" />
        <div className="save-details2">
          <p className="new-company">{`Save `}</p>
          <p className="new-company">details</p>
        </div>
      </div>
      <img className="producer-edit-profile-item" alt="" src="/group-3.svg" />
      
      <div className="my-products-parent" onClick={onGroupContainerClick}>
        <div className="my-products3">My Products</div>
        <img className="cart-icon2" alt="" src="/cart-icon.svg" />
      </div>

      <img className="person-icon4" alt="" src="/person-icon.svg" />
      <div className="my-profile7">My Profile</div>
      <div className="producer-edit-profile-inner" />
      <div className="producer-edit-profile-child1" />

      <div className="new-company-container">
        <p className="new-company">
          <label>Enter company name : <input type="text" name="company-name" required></input></label>
        </p><br/>
        <p className="new-company">
          <label>Enter producer name : <input type="text" name="company-name" required></input></label>
        </p><br/>
        <p className="new-company">
          <label>Email ID : <input type="email" name="producer-email" required></input></label>
        </p><br/>
        <p className="new-company">
          <label>Enter password : <input type="password" name="producer-password" required></input></label>
        </p><br/>
        <p className="new-company">
          <label>Confirm password : <input type="password" name="producer-confirm-password" required></input></label>
        </p><br/>
        <p className="new-company">
          <label>Address : <textarea name="address" required></textarea></label>
        </p><br/>
      </div>

      <img className="company1-1-icon2" alt="" src="/company1-11@2x.png" />
      <div className="insert-new-image2">Insert new image </div>
      <img className="producer-edit-profile-child2" alt="" src="/group-19.svg"/>
      <img className="mask-group-icon3" alt="" src="/mask-group.svg" onClick={onMaskGroupIconClick}/>
    </div>
  );
};

export default ProducerEditProfile;
