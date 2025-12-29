import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import CreateJob from './pages/CreateJob';
import jobsLoader from "./loaders/jobsLoader";
import JobDetails from "./pages/JobDetails";
import jobLoader from "./loaders/jobLoader";

// define the routes
const routes = [
  {
    path: "/",
    element: <Home />,
    loader: jobsLoader,
    hydrateFallbackElement: <p>Loading...</p>
  },
  {
    path: "/jobs/:jobId",
    element: <JobDetails />,
    loader: jobLoader,
    hydrateFallbackElement: <p>Loading...</p>
  },
  {
    path: "/job/create",
    element: <CreateJob />
  }
]

// create a browser router object
const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});


const App = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  )
}

export default App;