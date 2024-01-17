import React from "react";
import {
    createBrowserRouter,

} from "react-router-dom";
import MainRoot from "../layout/MainRoot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot />
    },
]);

export default router