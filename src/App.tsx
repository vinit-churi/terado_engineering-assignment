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
          element: <h1>e-commerce</h1>,
        },
        {
          path: "/customer",
          element: <h1>customer</h1>,
        },
        {
          path: "/crm",
          element: <h1>crm</h1>,
        },
        {
          path: "/chat",
          element: <h1>chat</h1>,
        },
        {
          path: "/companies",
          element: <h1>companies</h1>,
        },
        {
          path: "/project",
          element: <h1>project</h1>,
        },
        {
          path: "/calendar",
          element: <h1>calendar</h1>,
        },
        {
          path: "/tasks",
          element: <h1>tasks</h1>,
        },
        {
          path: "/contacts",
          element: <h1>contacts</h1>,
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
