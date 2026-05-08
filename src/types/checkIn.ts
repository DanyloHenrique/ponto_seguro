export type checkInInput = {
  name: string
  dateBirth: string
  cpf: string
}

export type createCheckIn = {
  name: string
  dateBirth: Date
  cpf?: string
  shelterId: string
}

export type checkInList = {
  created_at: Date
  date_birth: Date
  id: string
  person_name: string
}

export type checkIn = {
  created_at: Date
  id: string
  date_birth: Date
  person_name: string
  cpf?: string
  shelterId: string
  synced: boolean
  userId: string
}
