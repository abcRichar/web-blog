// 导入创建路由的函数
import { createHashRouter, Link } from "react-router-dom";
import LayoutMain from "../layout/index";
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Demos from "../pages/Demos/index";
import { Empty, Button } from "antd";

type Router = ReturnType<typeof createHashRouter>;
// 创建router路由实例对象，并配置路由对应关系（路由数组）
const router: Router = createHashRouter([
  {
    // 需要访问的路径
    path: "/",
    // 和路径对应的组件
    // 和 Vue 不同的是，此处是使用 element 接收 组件 或 jsx 的
    // 此处写 jsx 是为了演示，在实际开发中，这里写的是组件
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/demos",
        element: <Demos />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <Empty description="页面走丢了" />
        <Link to="/">
          <Button type="primary" onClick={() => {}}>
            回到首页
          </Button>
        </Link>
      </>
    ),
  },
  // {
  //   // 需要访问的路径
  //   path: "/about",
  //   // 和路径对应的组件
  //   // 和 Vue 不同的是，此处是使用 element 接收 组件 或 jsx 的
  //   // 此处写 jsx 是为了演示，在实际开发中，这里写的是组件
  //   element: <About />,
  // },
]);
console.log(router);

export default router;
