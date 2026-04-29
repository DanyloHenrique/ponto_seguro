import { useState } from 'react'
import { MdOutlineArrowCircleRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router'
import { z } from 'zod'
import { Input } from '@/components/input/Input'
import { Button } from '@/components/primaryButton/PrimaryButton'
import { authService } from '@/services/authService'
import type { loginUser } from '@/types/user'

const registerSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

export const Login = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errorsZod, setErrorsZod] = useState<Record<string, string>>({})
  const [dataLoginUser, setdataLoginUser] = useState<loginUser>({
    email: '',
    password: '',
  })
  const handleRegister = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const result = registerSchema.safeParse({
      email: dataLoginUser.email,
      password: dataLoginUser.password,
    })

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors

      setErrorsZod({
        email: fieldErrors.email?.[0] ?? '',
        password: fieldErrors.password?.[0] ?? '',
      })

      return
    }

    setErrorsZod({})
    setIsLoading(true)
    try {
      const token = await authService.login(
        dataLoginUser.email,
        dataLoginUser.password,
      )
      if (token) navigate('/')
    } catch (error) {
      console.error(error)
      alert('Erro ao entrar na conta')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex h-dvh w-full flex-col bg-background px-6 py-10 align-center">
      <div className="mb-6 text-center">
        <h2 className="mb-2 font-bold text-4xl">Ponto Seguro</h2>
        <p className="text-lg text-surface">Entre na sua conta</p>
      </div>

      <section className="flex flex-col gap-4 rounded-2xl bg-white p-6 lg:mx-auto lg:w-2/4">
        <form
          onSubmit={handleRegister}
          method="post"
          className="flex flex-col gap-4"
        >
          <div>
            <Input.Root>
              <Input.Label htmlFor="user-email">E-mail: </Input.Label>
              <Input.Control
                id="user-email"
                type="email"
                placeholder="email@exemplo.com"
                required
                value={dataLoginUser.email}
                onChange={(e) =>
                  setdataLoginUser({
                    ...dataLoginUser,
                    email: e.target.value,
                  })
                }
              />
            </Input.Root>
            {errorsZod.email && (
              <span className="text-alert">{errorsZod.email}</span>
            )}
          </div>

          <div>
            <Input.Root>
              <Input.Label htmlFor="user-password">Senha: </Input.Label>
              <Input.Control
                id="user-password"
                type="password"
                placeholder="******"
                required
                value={dataLoginUser.password}
                onChange={(e) =>
                  setdataLoginUser({
                    ...dataLoginUser,
                    password: e.target.value,
                  })
                }
              />
            </Input.Root>
            {errorsZod.password && (
              <span className="text-alert">{errorsZod.password}</span>
            )}
          </div>

          <Button.Root type="submit" disabled={false}>
            {isLoading ? (
              <Button.Loader />
            ) : (
              <>
                <Button.Icon>
                  <MdOutlineArrowCircleRight className="mt-1" />
                </Button.Icon>
                <Button.Label>Entrar na Conta</Button.Label>
              </>
            )}
          </Button.Root>
        </form>

        <p>
          Ainda não tem uma conta?{' '}
          <Link to="/criar-conta" className="text-safe">
            Criar agora
          </Link>
        </p>
      </section>
    </main>
  )
}
