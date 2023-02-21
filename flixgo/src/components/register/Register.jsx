import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';

const Register = () => {
    const [newuser, setNew] = useState([])
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    axios
      .post("http://localhost:3000/user", {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then((data) => setNew(data.data))
      .catch((err) => console.log(err));
      
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
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your Name!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          className="input-email"
          placeholder="Name"
        />
      </Form.Item>
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
          REGISTER
        </Button>
        Or <Link to="/login">login now!</Link>
      </Form.Item>
    </Form>
  );
};

export default Register;
