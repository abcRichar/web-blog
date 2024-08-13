import { Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
import { useNavigate, useLocation } from "react-router-dom";

const tabList = [
  {
    label: "首页",
    key: "/",
  },
  {
    label: "例子",
    key: "/demos",
  },
  {
    label: "关于",
    key: "/about",
  },
];

// const nav = useNavigate();
// function handleMenu(e: any) {
//   console.log(e, "1");
//   nav(e.key);
// }

function MyMenu() {
  const nav = useNavigate();
  const lo = useLocation();
  return (
    <Menu
      mode="horizontal"
      theme="light"
      defaultSelectedKeys={[lo.pathname]}
      items={tabList}
      onClick={(e) => nav(e.key)}
      style={{ flex: "1", minWidth: 0, justifyContent: "center", border: "none", background: "rgba(0,0,0,0)" }}
    />
  );
}

const layOutStyle = {
  minHeight: "100vh",
  background: "url(https://files.codelife.cc/wallpaper/wallspic/202408114ea7lj.jpeg?x-oss-process=image/resize,limit_0,m_fill,w_2560,h_1440/quality,Q_92/format,webp)",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function LayoutMain() {
  return (
    <Layout style={layOutStyle}>
      <Header style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
        <div className="demo-logo" />
        <MyMenu />
      </Header>
      <Content style={{ padding: "0 48px", minHeight: "80vh" }}>
        <div>
          <Outlet />
          {/* <RouterProvider router={router} /> */}
        </div>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer> */}
    </Layout>
  );
}
export default LayoutMain;
