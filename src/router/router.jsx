
import LoginPage from '../pages/login/index'
import { createBrowserRouter } from 'react-router'
import { profilePage } from '@/pages/profile';
import restaurantPage from '@/pages/restaurant';


const router =createBrowserRouter([

    {
        path:"/login",
        Component:LoginPage,
    },
    {
        path: "/",
       Component:restaurantPage,
      },
      {
        path:"/profile",
        Component:profilePage
      },
])

export default router;
