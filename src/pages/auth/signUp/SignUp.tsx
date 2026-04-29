import { useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { Link, useNavigate } from 'react-router'
import { z } from 'zod'
import { Input } from '@/components/input/Input'
import { Button } from '@/components/primaryButton/PrimaryButton'
import { authService } from '@/services/authService'
import type { createUser } from '@/types/user'

const registerSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

export const SignUp = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errorsZod, setErrorsZod] = useState<Record<string, string>>({})
  const [dataCreateUser, setDataCreateUser] = useState<createUser>({
    name: '',
    email: '',
    password: '',
  })
  const handleRegister = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const result = registerSchema.safeParse({
      name: dataCreateUser.name,
      email: dataCreateUser.email,
      password: dataCreateUser.password,
    })

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors

      setErrorsZod({
        name: fieldErrors.name?.[0] ?? '',
        email: fieldErrors.email?.[0] ?? '',
        password: fieldErrors.password?.[0] ?? '',
      })

      return
    }

    setErrorsZod({})
    setIsLoading(true)
    try {
      await authService.register(dataCreateUser)
      alert('Cadastro realizado com sucesso!')
      navigate('/login')
    } catch (error) {
      console.error(error)
      alert('Erro ao cadastrar')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex h-dvh w-full flex-col bg-background px-6 py-10 align-center">
      <div className="mb-6 text-center">
        <h2 className="mb-2 font-bold text-4xl">Ponto Seguro</h2>
        <p className="text-lg text-surface">Crie sua conta</p>
      </div>

      <section className="flex flex-col gap-4 rounded-2xl bg-white p-6 lg:mx-auto lg:w-2/4">
        <form
          onSubmit={handleRegister}
          method="post"
          className="flex flex-col gap-4"
        >
          <div>
            <Input.Root>
              <Input.Label htmlFor="user-name">Name: </Input.Label>
              <Input.Control
                id="user-name"
                type="text"
                placeholder="nome sobrenome"
                required
                value={dataCreateUser.name}
                onChange={(e) =>
                  setDataCreateUser({ ...dataCreateUser, name: e.target.value })
                }
              />
            </Input.Root>
            {errorsZod.name && (
              <span className="text-alert">{errorsZod.name}</span>
            )}
          </div>

          <div>
            <Input.Root>
              <Input.Label htmlFor="user-email">E-mail: </Input.Label>
              <Input.Control
                id="user-email"
                type="email"
                placeholder="email@exemplo.com"
                required
                value={dataCreateUser.email}
                onChange={(e) =>
                  setDataCreateUser({
                    ...dataCreateUser,
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
                value={dataCreateUser.password}
                onChange={(e) =>
                  setDataCreateUser({
                    ...dataCreateUser,
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
                  <MdAddCircleOutline className="mt-1" />
                </Button.Icon>
                <Button.Label>Criar Conta</Button.Label>
              </>
            )}
          </Button.Root>
        </form>

        <p>
          Já tem uma conta?{' '}
          <Link to="/login" className="text-safe">
            Fazer login
          </Link>
        </p>
      </section>
    </main>
  )
}
