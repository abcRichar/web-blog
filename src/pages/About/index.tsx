import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>关于页面</div>
      {/* 声明式 */}
      {/* <Link to={'/article'}>文章页面</Link> */}

      {/* 编程式 */}
      <Button type="primary" onClick={() => navigate("/")}>
        跳转到首页页面
      </Button>
    </div>
  );
};

export default Login;
