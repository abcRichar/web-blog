import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import { ConfigProvider } from "antd";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        components: {
          Menu: {
            itemColor: "#fff",
            itemHoverColor: "#fff",
            /* 这里是你的组件 token */
            // bodyBg: "https://files.codelife.cc/itab/defaultWallpaper/videos/v-19.jpg?x-oss-process=image/resize,limit_0,m_fill,w_400,h_200/quality,q_92/format,webp&a=1.svg",
          },
        },
      }}
    >
      {/* 使用 redux 的时候，需要用 Provider 包裹 RouterProvider */}
      {/* 路由绑定，注入路由实例对象 */}
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
