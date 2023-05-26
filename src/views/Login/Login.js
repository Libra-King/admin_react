import { Image, Form, Input, Button } from "antd";
import "./Login.css";

const onFinish = (values) => {
  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((res) => {
      let { errcode, status } = res;

      if (errcode !== 0 && status !== 1) {
        return;
      }

      navigator.push("/home");
    })
    .catch((err) => {
      throw err;
    });
  console.info("values", typeof values);
};

const onFinishFailed = (errorInfo) => {
  console.info("errorInfo", errorInfo);
};

function Login() {
  return (
    <div className="login">
      <Image
        src={require("../../imgages/login_bg.jpg")}
        width="100%"
        height="100%"
        preview={false}
      />
      <div className="container">
        <div className="form-container">
          <h1 className="font24">登录</h1>
          <Form
            name="login"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            className="login-form"
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: "请输入用户名!" }]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 20, offset: 4 }}>
              <Button type="primary" htmlType="submit">
                提 交
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
