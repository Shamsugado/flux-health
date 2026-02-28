import {createBrowserRouter, } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <h1 className="text-blue-500">Home</h1>
        },
        {
            path: "/orders",
            element: <h1 className="text-green-500">Orders</h1>
        },
        {
            path: "/about",
            element: <h1 className="text-purple-500">About</h1>
        }
        
    ]
}
]);

export default router;

// we need to render our app inside the router provider in main.jsx 
// to make sure that our app is wrapped with the router provider and we can use the router in our app.
// app 