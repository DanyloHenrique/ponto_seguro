import { LuCircleAlert } from 'react-icons/lu'
import { Button } from '@/components/primaryButton/PrimaryButton'

export const DeniedLocation = () => {
  return (
    <section className="flex h-dvh flex-col justify-center bg-background px-6 py-8 align-center">
      <div className="mx-auto mb-6 justify-center justify-items-center rounded-2xl bg-white px-4 py-3 text-center align-center md:w-1/2">
        <h3 className="mx-auto flex w-fit items-center gap-2 text-alert">
          <LuCircleAlert /> Localização negada
        </h3>
        <p className="my-2">
          Para o <strong>Ponto Seguro</strong> funcionar, precisamos saber onde
          você está para listar os abrigos próximos.
        </p>

        <Button.Root onClick={() => window.location.reload()} disabled={false}>
          <Button.Label>Tentar novamente</Button.Label>
        </Button.Root>

      </div>
    </section>
  )
}
