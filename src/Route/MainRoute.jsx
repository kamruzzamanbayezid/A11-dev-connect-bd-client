import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import AddAJob from "../Pages/AddAJob";
import AllJobs from "../Pages/AllJobs";


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
                  },
                  { 
                        path: 'addAJob',
                        element: <AddAJob></AddAJob>
                  },
                  { 
                        path: 'allJobs',
                        element: <AllJobs></AllJobs>
                  }
            ]
      }
]);

export default router;