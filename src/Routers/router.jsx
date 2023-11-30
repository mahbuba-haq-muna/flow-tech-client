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
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'userProfile',
          element: <UserProfile></UserProfile>
        },
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);

