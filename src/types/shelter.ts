export type createShelter = {
  name: string
  address: string
  latitude: number
  longitude: number
  capacity_max: number
  capacity_current: number
}

export type shelter = {
  id: string
  name: string
  address: string
  latitude: number
  longitude: number
  capacity_max: number
  capacity_current: number
  distance_in_km: number
}
