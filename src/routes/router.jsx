import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/mainLayout/MainLayout';
import Home from '../pages/Home';
import Brands from '../pages/Brands';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import NotFound from '../pages/NotFound';
import BrandDetails from '../pages/BrandDetails';
import PrivateRoute from './PrivateRoute';
import About from '../pages/About';
import Profile from '../pages/Profile';
import UpdateProfile from '../pages/UpdateProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch("/brands.json")
            },
            {
                path: "/brands",
                element: <Brands></Brands>,
                loader: ()=> fetch("/brands.json")
            },
            {
                path: "/brand/:id",
                element: <PrivateRoute>
                    <BrandDetails></BrandDetails>
                </PrivateRoute> ,
                loader: ()=> fetch("/brands.json")
            },
            
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/my-profile",
                element: <Profile></Profile>
            },
            {
                path: "/update-profile",
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path:"*",
        element: <NotFound></NotFound>,
    }
])

export default router;