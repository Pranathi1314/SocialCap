import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Role.css";
const Role = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/producer-sign-in");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/consumer-sign-in");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/supplier-sign-in");
  }, [navigate]);

  return (
    <div className="role">
      <img
        className="login-background-13"
        alt=""
        src="/login-background-2@2x.png"
      />
      <div className="role-child" />
      <img
        className="emojione-monotoneletter-s-icon4"
        alt=""
        src="/emojionemonotoneletters.svg"
      />
      <b className="sign-up6">Sign up</b>
      <div className="whats-your-role">What’s your role?</div>
      <img className="epback-icon3" alt="" src="/epback3.svg" />
      <img
        className="noto-v1woman-farmer-icon1"
        alt=""
        src="/notov1womanfarmer1.svg"
      />
      <img className="twemojifamily-icon1" alt="" src="/twemojifamily1.svg" />
      <img
        className="twemojiman-office-worker-ligh-icon1"
        alt=""
        src="/twemojimanofficeworkerlightskintone1.svg"
      />
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="group-child" />
        <div className="producer">Producer</div>
      </div>
      <div className="rectangle-group" onClick={onGroupContainer1Click}>
        <div className="group-child" />
        <div className="consumer">Consumer</div>
      </div>
      <div className="rectangle-container" onClick={onGroupContainer2Click}>
        <div className="group-child" />
        <div className="supplier">Supplier</div>
      </div>
    </div>
  );
};

export default Role;
