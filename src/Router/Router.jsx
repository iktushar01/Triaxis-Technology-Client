import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contuct from "../Pages/Home/Contuct";
import DemoServicesOne from "../Pages/ServicesPages/DemoServicesOne/DemoServicesOne";
import DemoServicesTwo from "../Pages/ServicesPages/DemoServicesTwo/DemoServicesTwo";
import DemoServicesThree from "../Pages/ServicesPages/DemoServicesThree/DemoServicesThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
          path:"about",
          element: <About/>
        },
        {
          path:"contact",
          element: <Contuct/>
        },
        {
          path:"services/service1",
          element: <DemoServicesOne/>
        },
        {
          path:"services/service2",
          element: <DemoServicesTwo/>
        },
        {
          path:"services/service3",
          element: <DemoServicesThree/>
        }
    ]
  },
]);

export default router;
