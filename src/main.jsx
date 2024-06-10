import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';

import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path: '/jobs',
        element: <FeaturedJobs></FeaturedJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
