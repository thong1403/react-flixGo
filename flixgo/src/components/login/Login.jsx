import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./Login.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((data) => setUser(data.data))
      .catch((err) => console.log(err));
  }, []);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log(user);
    let userFinder = user.find((e) => {
      return values.email === e.email && values.password === e.password;
    });
    if (userFinder) {
      window.location.href = "http://localhost:3001/";
    } else {
      alert("Sai email hoặc mật khẩu");
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <div>
        <img
          src="http://flixgo.volkovdesign.com/main/img/logo.svg"
          alt=""
          className="img-login"
        />
      </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          className="input-email"
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          className="input-pass"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
  );
};
export default Login;
