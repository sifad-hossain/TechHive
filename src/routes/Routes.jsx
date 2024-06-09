import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import ErrorPages from "../components/errorPages/ErrorPages";
import Login from "../pages/authentication/login/Login";
import SignUp from "../pages/authentication/signUp/SignUp"
import AddProduct from "../pages/dashboard/userDashboard/addProduct/AddProduct";
import AllProducts from "../pages/allProducts/AllProducts";
import MyProducts from "../pages/dashboard/userDashboard/myProducts/MyProducts";
import ProductDetail from "../pages/shared/productDetail/ProductDetail";
import Dashboard from "../layout/Dashboard";
import MyProfile from "../pages/dashboard/userDashboard/myProfile/MyProfile";
import AllUsers from "../pages/dashboard/adminDashboard/allUsers/AllUsers";
import AdminRoute from "./AdminRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allProducts',
        element: <AllProducts></AllProducts>
      },
      {
        path: "/productDetail/:id",
        element: <ProductDetail></ProductDetail>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    // element: <privateRoute><Dashboard></Dashboard></privateRoute>
    element: <Dashboard></Dashboard>,
    children: [
      //User Dashboard
      {
        path: '/dashboard/myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: '/dashboard/myProducts',
        element: <MyProducts></MyProducts>

      },
      {
        path: '/dashboard/addProducts',
        element: <AddProduct></AddProduct>

      },

      //Admin Routes
      {
        path: '/dashboard/allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);