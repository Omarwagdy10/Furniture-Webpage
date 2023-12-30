import axios from "axios";
import React, { useState } from "react";
import "./style/Login.css";
import { FaRegWindowClose } from "react-icons/fa";

// import { Link } from 'react-router-dom'

function LoginPage() {
  // const [value,setvalue]= useState()
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  console.log({ email, password });

  const handelemail = (e) => {
    setemail(e.target.value);
  };
  const handelpassword = (e) => {
    setpassword(e.target.value);
  };

  const handelapi = () => {
    axios
      .post(
        "https://reqres.in/api/login",

        {
          email: email,
          password: password,
        }
      )

      .then((result) => {
        console.log(result.data);
        alert("welcome");

        if ({ email: email }) {
          const log = document.querySelector(".Log-In");
          log.classList.add("remove");
        }
      })
      .catch((error) => {
        alert("wrong");
      });
  };

  const close = ()=>{
    const log = document.querySelector(".Log-In");
    log.classList.add("remove");
  }

  return (
    <div className="Log-In ">



      <div className="Inputs">

    <div className="close"  onClick={close}>
    <FaRegWindowClose />

    </div>
        <h3>Subscribe And Get 25% Discount!</h3>
        <p className="inputsP">
          Subscribe to the newsletter to receive updates about new products
        </p>
        <br />
        <input
          className="Email"
          value={email}
          onChange={handelemail}
          type="email"
          placeholder="Enter Your email"
        />
        <br />
        <br />
        <input
          value={password}
          className="Email"
          onChange={handelpassword}
          type="password"
          placeholder="Enter Your password"
        />

        <br />
        <br />
        <button className="Login-button" onClick={handelapi}>
          {" "}
          SUBSCRIBE
        </button>
        <br />
        <div className="checkbox">
          <input type="checkbox"></input>
          <p>Don't show this popup again!</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

// email :eve.holt@reqres.in
// pass :any pass
