import { createBrowserRouter } from 'react-router'

import { MainLayout } from '@/layout/MainLayout'
import { Login } from '@/pages/auth/login/Login'
import { SignUp } from '@/pages/auth/signUp/SignUp'
import { NearbyShelters } from '@/pages/nearbyShelters/NearbyShelters'

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
        path: '/abrigos-proximos',
        element: <NearbyShelters />,
        handle: {
          title: 'Abrigos Próximos',
        },
      },
    ],
  },
])
