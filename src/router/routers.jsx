import React from "react";
import {
    createBrowserRouter,

} from "react-router-dom";
import MainRoot from "../layout/MainRoot";
import Home from "../pages/homePage/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router