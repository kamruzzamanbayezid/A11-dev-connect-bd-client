import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import AddAJob from "../Pages/AddAJob";
import AllJobs from "../Pages/AllJobs";
import JobDetails from "../Pages/jobDetails";
import MyJobs from "../Pages/MyJobs";
import UpdateJobs from "../Pages/UpdateJobs";
import AppliedJob from "../Pages/AppliedJob";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../Pages/LoginPage";
import Blog from "../Pages/Blog";


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
                        element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
                  },
                  {
                        path: 'allJobs',
                        element: <AllJobs></AllJobs>
                  },
                  {
                        path: 'jobDetails/:id',
                        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                  },
                  {
                        path: 'myJobs',
                        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
                  },
                  {
                        path: 'updateJobs/:id',
                        element: <UpdateJobs></UpdateJobs>,
                        loader: ({ params }) => fetch(`https://dev-connect-bd-server.vercel.app/api/v1/allJobs/singleJobs/${params.id}`)
                  },
                  {
                        path: 'appliedJobs',
                        element: <PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>
                  },
                  {
                        path: 'login',
                        element: <LoginPage></LoginPage>
                  },
                  {
                        path: 'blogs',
                        element: <Blog></Blog>
                  }
            ]
      }
]);

export default router;