import { Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";
import { ZIndex } from "@tsparticles/engine";
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
  minWidth: "100%",
  backgroundImage: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)",
  // background: "url(https://files.codelife.cc/wallpaper/wallspic/202408114ea7lj.jpeg?x-oss-process=image/resize,limit_0,m_fill,w_2560,h_1440/quality,Q_92/format,webp)",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: "99",
};

const bgStyle = {
  minHeight: "100vh",
  minWidth: "100%",
  ZIndex: -1,
  backgroundImage: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)",
  // background: "url(https://files.codelife.cc/wallpaper/wallspic/202408114ea7lj.jpeg?x-oss-process=image/resize,limit_0,m_fill,w_2560,h_1440/quality,Q_92/format,webp)",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function LayoutMain() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any): void => {
    console.log(container);
  };

  const options: any = useMemo(
    () => ({
      // zIndex: "-1",
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 200,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // if (init) {
  //   return
  // }
  return (
    <>
      <Particles id="tsparticles" options={options} />
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
    </>
  );
}
export default LayoutMain;
