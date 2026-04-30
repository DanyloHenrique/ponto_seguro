import { Link } from 'react-router'
import { Features } from '@/pages/landingPage/components/Features'
import { HeroSection } from '@/pages/landingPage/components/HeroSection'
import { NavBar } from '@/pages/landingPage/components/NavBar'

export const LandingPage = () => {
  return (
    <div className="min-h-screen scroll-smooth font-sans text-surface-900 selection:bg-safe-200">
      <div className="bg-safe-200 px-6 pt-6 lg:px-12 lg:py-6">
        <NavBar />
        <HeroSection />
        <Features />
      </div>

      <section className="bg-safe-50 px-6 py-6 text-center lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <h2 className="mb-4 font-black text-3xl text-surface-900 md:text-4xl">
            Pronto para ajudar ou ser ajudado?
          </h2>
          <p className="mb-10 text-lg text-surface-600">
            Cadastre-se agora e faça parte da rede de segurança.
          </p>
          <Link
            to={'/criar-conta'}
            className="rounded-xl bg-alert-500 px-10 py-4 font-bold text-white transition-colors hover:bg-alert-600"
          >
            Criar minha conta
          </Link>
        </div>
      </section>

      <footer className="bg-surface-900 px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="font-black text-lg text-white">Ponto Seguro</div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-surface-400 text-xs">
            <a href="#" className="hover:text-white">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white">
              Privacidade
            </a>
            <a href="#" className="hover:text-white">
              Contato
            </a>
            <a href="#" className="hover:text-white">
              Documentação
            </a>
          </div>

          <div className="text-surface-500 text-xs">
            © 2062 Ponto Seguro. Gestão humanitária e resiliente.
          </div>
        </div>
      </footer>
    </div>
  )
}
