import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/mainLayout/MainLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    },
    {
        path:"*",
        element: <h3>Error</h3>
    }
])

export default router;