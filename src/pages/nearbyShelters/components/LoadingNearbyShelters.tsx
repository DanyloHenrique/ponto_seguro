import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const LoadingNearbyShelter = () => {
  return (
    <section className="flex h-dvh w-full flex-col items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center gap-4">
        <AiOutlineLoading3Quarters
          className="animate-spin text-primary"
          size={32}
        />
        <p className="text-foreground">Buscando os abrigos próximos...</p>
      </div>
    </section>
  )
}
