import { createBrowserRouter } from 'react-router'

import { MainLayout } from '@/layout/MainLayout'
import { Login } from '@/pages/auth/login/Login'
import { SignUp } from '@/pages/auth/signUp/SignUp'
import { NearbyShelters } from '@/pages/nearbyShelters/NearbyShelters'
import { RegisterMissingPerson } from '@/pages/registerMissingPerson/RegisterMissingPerson'
import { RegisterShelter } from '@/pages/registerShelter/RegisterShelter'

import { ProtectRoutes } from './ProtectRoutes'

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
      {
        path: '/cadastrar-abrigo',
        element: <RegisterShelter />,
        handle: {
          title: 'Cadastrar Abrigo',
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
