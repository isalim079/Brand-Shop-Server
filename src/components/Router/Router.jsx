import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import ErrorPage from "./ErrorPage";
import Home2 from "../Home/Home/Home2";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../Register/Register";
import SixBrand from "../SixBrand/SixBrand";
import ProductDetails from "../SixBrand/ProductDetails";
import AddToCart from "../AddToCart/AddToCart";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

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
                path: "/sixBrands/:brands",
                element: <SixBrand></SixBrand>,
                loader: () => fetch("http://localhost:4001/brands"),
            },
            {
                path: "/productDetails/:brands",
                element: (
                    <PrivateRoute>
                        <ProductDetails></ProductDetails>
                    </PrivateRoute>
                ),
                loader: () => fetch("http://localhost:4001/brands"),
            },
            {
                path: "/myCarts",
                element: (
                    <PrivateRoute>
                        <AddToCart></AddToCart>
                    </PrivateRoute>
                ),
                loader: () => fetch("http://localhost:4001/brandShopCarts"),
            },
            {
                path: "/updateProducts/:id",
                element: (
                    <PrivateRoute>
                        <UpdateProduct></UpdateProduct>
                    </PrivateRoute>
                ),
                loader: ({params}) => fetch(`http://localhost:4001/brands/${params.id}`)
            },
        ],
    },
]);

export default Router;
