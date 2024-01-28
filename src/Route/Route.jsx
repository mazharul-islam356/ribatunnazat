import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Intro from "../Components/intro/Intro";
import Member from "../Components/member/Member";
import GoingTurky from "../Components/Home/ourWork/GoingTurky";
import RestrurentEvent from "../Components/Home/ourWork/RestrurentEvent";
import Commitment from "../Components/commitment/Commitment";
import Chada from "../Components/Chada/Chada";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/intro',
        element: <Intro></Intro>
      },
      {
        path:'/member',
        element:<Member></Member>
      },
      {
        path:'/goingT',
        element:<GoingTurky></GoingTurky>
      },
      {
        path:'/restrurentE',
        element: <RestrurentEvent></RestrurentEvent>
      },
      {
        path:'/commitment',
        element: <Commitment></Commitment>
      },
      {
        path: '/chada',
        element: <Chada></Chada>
      }

      
    ],
  },
  
]);
