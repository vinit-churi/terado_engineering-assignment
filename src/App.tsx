import Dashboard from "@/pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardIndex from "./components/dashboard/DashboardIndex";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <h1>404 Not Found</h1>,
      children: [
        {
          path: "/",
          element: <DashboardIndex />,
        },
        {
          path: "/e-commerce",
          element: (
            <h1 className="text-stone-500 p-4 row-start-2 col-start-2">
              dashboard /{" "}
              <span className="text-blue-600 underline ">e-commerce</span>
            </h1>
          ),
        },
        {
          path: "/customer",
          element: (
            <h1 className="text-stone-500 p-4 row-start-2 col-start-2">
              dashboard /{" "}
              <span className="text-blue-600 underline ">customer</span>
            </h1>
          ),
        },
        {
          path: "/crm",
          element: (
            <h1 className="text-stone-500 p-4 row-start-2 col-start-2">
              dashboard / <span className="text-blue-600 underline ">crm</span>
            </h1>
          ),
        },
        {
          path: "/chat",
          element: (
            <h1 className="text-stone-500 p-4 row-start-2 col-start-2">
              dashboard / <span className="text-blue-600 underline ">chat</span>
            </h1>
          ),
        },
        {
          path: "/companies",
          element: (
            <h1 className="text-stone-500 p-4 row-start-2 col-start-2">
              dashboard /{" "}
              <span className="text-blue-600 underline ">companies</span>
            </h1>
          ),
        },
        {
          path: "/project",
          element: (
            <h1 className="text-stone-500 p-4 row-start-2 col-start-2">
              dashboard /{" "}
              <span className="text-blue-600 underline ">project</span>
            </h1>
          ),
        },
        {
          path: "/calendar",
          element: (
            <h1 className="text-stone-500 p-4 row-start-2 col-start-2">
              dashboard /{" "}
              <span className="text-blue-600 underline ">calendar</span>
            </h1>
          ),
        },
        {
          path: "/tasks",
          element: (
            <h1 className="text-stone-500 p-4 row-start-2 col-start-2">
              dashboard /{" "}
              <span className="text-blue-600 underline ">tasks</span>
            </h1>
          ),
        },
        {
          path: "/contacts",
          element: (
            <h1 className="text-stone-500 p-4 row-start-2 col-start-2">
              dashboard /{" "}
              <span className="text-blue-600 underline ">contacts</span>
            </h1>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <h1>404 Not Found</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
