import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => {
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
  const validate = (userDetails) => {
    if (userDetails.name.lenght < 1) {
      alert("isim alanı boş bırakılamaz");
      return false;
    }
    if (!validateEmail(userDetails.email)) {
      alert("lütfen geçerli bir email giriniz");
      return false;
    }
    if (userDetails.password.length < 5) {
      alert("şifre 5 haneden kucuk olamaz");
      return false;
    }
    if (userDetails.password !== userDetails.checkPassword) {
      alert("şifreler uyuşmuyor");
      return false;
    }
    return true;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const User = {
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password,
    };
    if (validate(userDetails)) {
      const response = await Axios.post("/users/register", User);
      alert(response.data);
      if (response.data === "Başarıyla kaydedildi") {
        history.push("/login");
      }
    }
  };

  return (
    <Col className="col registerCol">
      <div className="formHeaderText">
        <h3>Kayıt Ol</h3>
        <hr />
      </div>
      <form className="registerForm">
        <div className="form-group">
          <label>Fullname</label>
          <input
            name="name"
            className="form-control"
            required
            value={userDetails.name}
            placeholder="Full name"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input
            name="email"
            className="form-control"
            required
            value={userDetails.email}
            placeholder="Email address"
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
            value={userDetails.password}
            placeholder="Create password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Check Password</label>
          <input
            name="checkPassword"
            className="form-control"
            required
            value={userDetails.checkPassword}
            placeholder="Repeat password"
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
            Create Account
          </button>
        </div>
        <p className="text-center">
          Have an account?{" "}
          <a href="./login" className="btnText">
            Log In
          </a>
        </p>
      </form>
    </Col>
  );
}

export default Register;
