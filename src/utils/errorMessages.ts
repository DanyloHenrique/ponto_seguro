export const errorMessages: Record<string, string> = {
  'E-mail already exists.': 'E-mail já cadastrado',
  'Invalid Credentials.': 'E-mail ou senha inválidos',
  'User Not Found.': 'Usuário não encontrado',
}

export const translateError = (
  message: string,
  fallback = 'Algo deu errado',
): string => {
  return errorMessages[message] ?? fallback
}
