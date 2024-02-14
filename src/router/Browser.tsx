import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Auth from "../pages/Auth/Auth";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
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