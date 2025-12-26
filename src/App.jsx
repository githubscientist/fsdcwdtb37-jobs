import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";


// define the routes
const routes = [
  {
    path: "/",
    element: <Home />
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