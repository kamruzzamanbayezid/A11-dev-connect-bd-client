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
                  },
                  {
                        path: 'jobDetails/:id',
                        element: <JobDetails></JobDetails>,
                  },
                  {
                        path: 'myJobs',
                        element: <MyJobs></MyJobs>
                  },
                  {
                        path: 'updateJobs/:id',
                        element: <UpdateJobs></UpdateJobs>,
                        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/allJobs/singleJobs/${params.id}`)
                  }
            ]
      }
]);

export default router;