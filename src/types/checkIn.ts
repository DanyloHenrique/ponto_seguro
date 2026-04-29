export type checkInInput = {
  name: string
  dateBirth: string
}

export type createCheckIn = {
  name: string
  dateBirth: Date
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
  date_birth: Date
  id: string
  person_name: string
  shelterId: string
  synced: boolean
  userId: string
}
