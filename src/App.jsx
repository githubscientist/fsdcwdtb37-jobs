import { createBrowserRouter, RouterProvider } from "react-router";

// define the routes
const routes = [
  {
    path: "/",
    element: <h1 className="text-4xl text-left mt-4 ml-4">Hello App</h1>
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