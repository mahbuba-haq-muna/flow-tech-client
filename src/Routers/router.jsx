import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProducts from "../Pages/AllProducts/Allproducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Review from "../Pages/Review/Review";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ProductReview from "../Pages/Dashboard/ProductReview/ProductReview";
import Reported from "../Pages/Dashboard/Reported/Reported";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import AdminRoute from "./AdminRoute";
import Statistics from "../Pages/Dashboard/Statistics/Statistics";
import Coupon from "../Pages/Dashboard/Coupon/Coupon";


 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'products',
          element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'products/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({params}) =>fetch(`https://flow-tech-server.vercel.app/products/${params.id}`),
        },
        {
          path: 'products/:id/:review',
          element: <Review></Review>
        },
        {
          path: 'featured/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({params}) =>fetch(`https://flow-tech-server.vercel.app/featured/${params.id}`),
        }
      ]
    },
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        // user dashboard
        {
          path: 'userProfile',
          element: <UserProfile></UserProfile>
        },
        {
          path: 'addProduct',
          element: <AddProducts></AddProducts>
        },
        {
          path: 'myProduct',
          element: <MyProducts></MyProducts>
        },
        {
          path: 'updateItem/:id',
          element: <UpdateItem></UpdateItem>,
          loader:  ({params}) =>fetch(`https://flow-tech-server.vercel.app/myItems/${params.id}`)
        },

          // admin dashboard
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'coupon',
          element: <Coupon></Coupon>
        },

        // moderator dashboard
        {

        },
        {
          path: 'productReview',
          element: <ProductReview></ProductReview>
        },
        {
          path: 'reported',
          element: <Reported></Reported>
        }
      ]
    }
  ]);

