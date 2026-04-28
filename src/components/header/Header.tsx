import { useMatches } from "react-router"
import { MdMenu } from "react-icons/md"
import { BsPersonCircle } from "react-icons/bs"

type RouteHandle = {
  title?: string
}

export const Header = () => {
  const matches = useMatches()
  const currentRoute = matches[matches.length - 1]
  const handle = currentRoute.handle as RouteHandle
  const title = handle.title || "Página"

  return (
    <header className="flex w-full items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <MdMenu />
        <strong className="text-lg font-bold tracking-tight">{title}</strong>
      </div>

      <a href="">
        <BsPersonCircle />
      </a>
    </header>
  )
}
