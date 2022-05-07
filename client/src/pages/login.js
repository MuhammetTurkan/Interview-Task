import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Axios from "axios";

function Login() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }

  const validate = (userInfo) => {
    if (!validateEmail(userInfo.email)) {
      alert("lütfen geçerli bir email giriniz");
      return false;
    }
    if (userInfo.password.length < 5) {
      alert("şifre 5 haneden kucuk olamaz");
      return false;
    }

    return true;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const User = {
      email: userInfo.email,
      password: userInfo.password,
    };
    if (validate(userInfo)) {
      const response = await Axios.post("/users/login", User);
      alert(response.data);
      if (response.data === "Giriş başarılı.") {
        history.push("/userHome");
      }
    }
  };

  return (
    <Col className="col loginCol">
      <div className="formHeaderText">
        <h3>Giriş Yap</h3>
        <hr />
      </div>
      <form className="loginForm">
        <div className="form-group">
          <label>E-mail</label>
          <input
            name="email"
            className="form-control"
            required
            value={userInfo.email}
            placeholder="Enter email address"
            type="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            className="form-control"
            required
            value={userInfo.password}
            placeholder="Enter password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            onClick={submitHandler}
            className="btn btn-primary btn-block"
          >
            Login
          </button>
        </div>
        <p className="text-center">
          Already have an account?
          <a href="./register" className="btnText">
            Register
          </a>
        </p>
      </form>
    </Col>
  );
}

export default Login;
