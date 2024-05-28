import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Login from "./interface/login/login";
import UserList from "./interface/userlist/userlist";
import MainContent from "./interface/root/root";
import Dashboard from "./interface/dashboard/dashboard";
import Update from "./interface/userlist/update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    element: <MainContent/>,
    children: [
      {
        path: "home",
        element: <Dashboard/>,
      },
      {
        path: "userlist",
        element: <UserList />,
        children: [
          {
            path: "update",
            element: <Update />,
          }
        ]
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
