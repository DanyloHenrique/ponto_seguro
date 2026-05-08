export type inputMissingPerson = {
  name: string
  dateBirth: string
  cpf: string
  lastSeenLocation: string
  contactName: string
  contactPhone: string
  physicalDescription: string
  clothesDescription: string
}

export type postMissingPerson = {
  name: string
  dateBirth: Date
  cpf?: string
  lastSeenLocation: string
  contactName: string
  contactPhone: string
  physicalDescription?: string
  clothesDescription?: string
}

export type missingPerson = {
  id: string
  userId: string
  shelterId?: string
  name: string
  dateBirth: Date
  cpf?: string
  lastSeenLocation: string
  contactName: string
  contactPhone: string
  physicalDescription?: string
  clothesDescription?: string
  created_at: string
}
