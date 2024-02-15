import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Auth from "../pages/Auth/Auth";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/shop',
                element: <Shop />,
            }
        ]
    }, 
    {
        path: '/auth',
        element: <Auth/>,
        children: [
            {
                path: '/auth/login',
                element: <Login/>,
            }, 
            {
                path: '/auth/register',
                element: <Register/>,
            },
        ]
    },
]); 

const Browser = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default Browser;