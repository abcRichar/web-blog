import { Link, useNavigate } from "react-router-dom";
import { Button, Tag } from "antd";
import Typed from "typed.js";
import React from "react";

import "./index.css";
function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Hello</i> World.", "Welcome Richar Blog."],
      typeSpeed: 50,
      loopCount: 3,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="about-txt" style={{ textAlign: "center", zIndex: "99999" }}>
      <span ref={el} style={{ fontSize: "100px", color: "#fff", textAlign: "center" }} />
    </div>
  );
}

function ArtItem() {
  return (
    <>
      <div className="art-item">
        <img
          src="https://www4.bing.com//th?id=OHR.HertfordshireLavender_ZH-CN9771886404_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp&w=360&h=202"
          alt=""
          style={{ width: "200px", borderRadius: "10px" }}
        />
        <div style={{ marginLeft: "10px" }}>
          <div className="flex items-center">
            <div className="art-title mr-1"> 标题</div>
            <Tag color="success">Vue</Tag>
          </div>
          <div className="art-cont">内容 内容 内容 内容 内容 内容</div>
        </div>
      </div>
    </>
  );
}

const Home = () => {
  return (
    <div>
      <MyComponent />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ArtItem />
        <ArtItem />
        <ArtItem />
        <ArtItem />
        <ArtItem />
      </div>
      {/* 声明式 */}
      {/* <Link to="/login">登录页面</Link> */}

      {/* 编程式 */}
      {/* <Button type="primary" onClick={() => navigate("/about")}>
        跳转关于页面
      </Button> */}
    </div>
  );
};

export default Home;
