import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/mainLayout/MainLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch("/brands.json")
            }
        ]
    },
    {
        path:"*",
        element: <h3>Error</h3>
    }
])

export default router;