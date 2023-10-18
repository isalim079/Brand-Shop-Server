import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import ErrorPage from "./ErrorPage";
import Home2 from "../Home/Home/Home2";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../Register/Register";
import SixBrand from "../SixBrand/SixBrand";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home2></Home2>,
                loader: () => fetch("/brandNames.json"),
            },
            {
                path: "/addProducts",
                element: (
                    <PrivateRoute>
                        <AddProduct></AddProduct>
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: '/sixBrands/:brands',
                element: <SixBrand></SixBrand>,
                loader: () => fetch("http://localhost:4001/brands"),
            }
           
        ],
    },
]);

export default Router;
