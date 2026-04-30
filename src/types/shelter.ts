import type { checkIn } from '@/types/checkIn'

export type createShelter = {
  name: string
  address: string
  latitude: number
  longitude: number
  capacity_max: number
}

export type inputShelter = {
  name: string
  address: string
  latitude: string
  longitude: string
  capacity_max: string
}

export type nearbyShelter = {
  id: string
  name: string
  address: string
  latitude: number
  longitude: number
  capacity_max: number
  capacity_current: number
  distance_in_km: number
}

export type shelter = {
  id: string
  name: string
  address: string
  latitude: number
  longitude: number
  capacity_max: number
  capacity_current: number
  checkIns: checkIn[]
}

export type shelterUser = {
  id: string
  name: string
  address: string
  latitude: number
  longitude: number
  capacity_max: number
  capacity_current: number,
  userId: string
}
