import { Outlet } from 'react-router'
import { Header } from '@/components/header/Header'

export function MainLayout() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto bg-background">
        <Outlet />
      </main>
    </div>
  )
}
