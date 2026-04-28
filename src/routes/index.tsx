import { createBrowserRouter } from "react-router"

import { MainLayout } from "@/layout/MainLayout"

import { NearbyShelters } from "@/pages/nearbyShelters/NearbyShelters"

export const router = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <Login />,
  //   handle: {
  //     title: "Login",
  //   },
  // },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/nearby-shelters",
        element: <NearbyShelters />,
        handle: {
          title: "Abrigos Próximos",
        },
      },
    ],
  },
])