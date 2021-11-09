import React, { useState } from "react";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { Button, message } from "antd";
import { LoginSuccess } from "../../StateManegment/Action/LoginAction";


function Login() {
  let history = useHistory();
  let [user, setUser] = useState("");
  let [pass, setPass] = useState("");
  let [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if ((user, pass)) {
      setLoading(true);
     LoginSuccess(user);
      setTimeout((e) => history.push("/"), 800);
    } else {
      message.error("please Enter username & password !");
    }
  };

  return (
    <div className={"bg"}>
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <UserOutlined />
                    </span>
                  </div>
                  <input
                    onChange={(e) => setUser(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <KeyOutlined />
                    </span>
                  </div>
                  <input
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <div className={"d-flex justify-content-between align-items-center "}>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div className="">
                    <Button
                      loading={loading}
                      classNameName="btn float-right login_btn"
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                @Created By Amir hossein Khakbaz
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
