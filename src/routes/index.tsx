import { createBrowserRouter } from 'react-router'

import { MainLayout } from '@/layout/MainLayout'
import { Login } from '@/pages/auth/login/Login'
import { SignUp } from '@/pages/auth/signUp/SignUp'
import { NearbyShelters } from '@/pages/nearbyShelters/NearbyShelters'
import { RegisterMissingPerson } from '@/pages/registerMissingPerson/RegisterMissingPerson'
import { ProtectRoutes } from '@/routes/ProtectRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Ola, mundo</div>,
    handle: {
      title: 'Home',
    },
  },
  {
    path: '/criar-conta',
    element: <SignUp />,
    handle: {
      title: 'criar-conta',
    },
  },

  {
    path: '/login',
    element: <Login />,
    handle: {
      title: 'login',
    },
  },

  {
    element: <MainLayout />,
    children: [
      {
        path: '/pessoa-desaparecida',
        element: <RegisterMissingPerson />,

        handle: {
          title: 'Registrar Pessoa Desaparecida',
        },
      },
    ],
  },

  {
    element: <ProtectRoutes />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: '/abrigos-proximos',
            element: <NearbyShelters />,

            handle: {
              title: 'Abrigos Próximos',
            },
          },
        ],
      },
    ],
  },
])
