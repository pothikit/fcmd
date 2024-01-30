import React from "react";
import {
    createBrowserRouter,

} from "react-router-dom";
import MainRoot from "../layout/MainRoot";
import Home from "../pages/homePage/Home";
import Blogs from "../pages/blogs/Blogs";
import BlogDetails from "../pages/blogs/BlogDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>
            },
            {
                path: "/blog-details/:id",
                element: <BlogDetails></BlogDetails>
            }
        ]
    },
]);

export default router