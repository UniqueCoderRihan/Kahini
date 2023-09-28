import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import Login from "../Pages/Login/Login";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Products from "../Pages/Products/Products";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category-products',
                element: <CategoryProducts/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/register',
                element: <SingUp></SingUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;