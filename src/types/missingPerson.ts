export type inputMissingPerson = {
  name: string
  dateBirth: string
  lastSeenLocation: string
  contactName: string
  contactPhone: string
  physicalDescription: string
  clothesDescription: string
}

export type postMissingPerson = {
  name: string
  dateBirth: Date
  lastSeenLocation: string
  contactName: string
  contactPhone: string
  physicalDescription?: string
  clothesDescription?: string
}
