import { useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProducerSignIn.css";
import axios from "axios";

const ProducerSignIn = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/producer-landing-page");
  }, [navigate]);

  const [input, setInput] = useState({
    producername:'',
    produceremail:'',
    producercontact:'',
    produceraddress:'',
    producerpassword:'',
    producercategory:''
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault();
    const newNote = {
      producername: input.producername,
      produceremail: input.produceremail,
      producercontact: input.producercontact,
      produceraddress: input.produceraddress,
      producerpassword: input.producerpassword,
      producercategory: input.producercategory
    }

    axios.post('http://localhost:3001/producer-sign-in', newNote)
  }

  return (
    <div className="producer-sign-in">
      <div className="consumer-sign-in1">
        <img
          className="login-background-11"
          alt=""
          src="/login-background-1@2x.png"
        />
        <img className="rectangle-icon" alt="" src="/rectangle-8.svg" />

        <div>
          <form>
            <div className="name-of-company">Name of Company</div>
            <input onChange={handleChange} type="text" name="producername" value={input.producername} id="name-field"></input>
            <div className="user-id1">User Id</div>
            <input onChange={handleChange} type="email" name="produceremail" value={input.produceremail} id="userID-field"></input>
            <div className="contact-no1">Contact No.</div>
            <input onChange={handleChange} type="text" name="producercontact" value={input.producercontact} id="contact-field"></input>
            <div className="address1">Address</div>
            <textarea onChange={handleChange} name="produceraddress" value={input.produceraddress} id="address-field"></textarea>
            <div className="password1">Password</div>
            <input onChange={handleChange} type="password" name="producerpassword" value={input.producerpassword} id="password-field"></input>
            <div className="category">Category of products</div>
            <select onChange={handleChange} name="producercategory" value={input.producercategory} id="category-field" required>
              <option value="" disabled selected> &nbsp; Select product category </option>
              <option value="Dairy products">Dairy products</option>
              <option value="Juices">Juices</option>
              <option value="Baked goods">Baked goods</option>
              <option value="Pickles">Pickles</option>
              <option value="Papad">Papad</option>
              <option value="Snacks">Snacks</option>
              <option value="Others">Others</option>
            </select>
            <div onClick={onRectangle1Click}>
              <input onClick={handleClick} type="submit" className="consumer-sign-in-child7" value="Sign Up"></input>
            </div>
          </form>
        </div>

        <img
          className="twemojiman-office-worker-ligh-icon"
          alt=""
          src="/twemojimanofficeworkerlightskintone.svg"
        />
        <b className="sign-up2">Sign-Up</b>

        <div className="consumer-sign-in-child2" />
        <div className="consumer-sign-in-child3" />
        <img className="consumer-sign-in-child4" alt="" src="/line-4.svg" />
        <div className="consumer-sign-in-child5" />
        <img className="consumer-sign-in-child6" alt="" src="/line-4.svg" />
        <img className="riclose-line-icon3" alt="" src="/ricloseline1.svg" />
        <div className="already-have-an1">Already have an account? Login</div>
        <img className="epback-icon1" alt="" src="/epback1.svg" />
        <img className="riclose-line-icon4" alt="" src="/ricloseline1.svg" />
        <img className="riclose-line-icon5" alt="" src="/ricloseline1.svg" />
        <div className="riclose-line1" />
        <img className="vector-icon1" alt="" src="/vector.svg" />
        <img
          className="icbaseline-lock-icon1"
          alt=""
          src="/icbaselinelock.svg"
        />
      </div>
    </div>
  );
};

export default ProducerSignIn;
