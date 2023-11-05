import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            errorElement: <ErrorPage></ErrorPage>,
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