import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import Typed from "typed.js";
import React from "react";

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Hello</i> World.", "Welcome Richar Blog."],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <span ref={el} style={{ fontSize: "100px", color: "#fff", textAlign: "center" }} />
    </div>
  );
}
const Article = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MyComponent />
      {/* 声明式 */}
      {/* <Link to="/login">登录页面</Link> */}

      {/* 编程式 */}
      <Button type="primary" onClick={() => navigate("/about")}>
        跳转关于页面
      </Button>
    </div>
  );
};

export default Article;
