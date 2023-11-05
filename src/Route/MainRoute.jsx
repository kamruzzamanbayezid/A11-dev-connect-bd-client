import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";


const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        index: true,
                        element: <Home></Home>
                  },
                  {
                        path: 'register',
                        element: <Register></Register>
                  }
            ]
      }
]);

export default router;