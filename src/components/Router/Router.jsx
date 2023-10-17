import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import ErrorPage from "./ErrorPage";
import Home2 from "../Home/Home/Home2";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home2></Home2>,
                loader: () => fetch('/brandNames.json')
            },
            {
                path: "/addProducts",
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default Router