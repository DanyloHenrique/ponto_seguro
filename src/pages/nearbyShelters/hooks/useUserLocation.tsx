import { useEffect, useState } from 'react'

interface ILocation {
  latitude: number | null
  longitude: number | null
  city: string | null
  suburb: string | null
}

export function useUserLocation() {
  const [isDenied, setIsDenied] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useState<ILocation>({
    latitude: null,
    longitude: null,
    city: null,
    suburb: null,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          )

          const data = await response.json()

          setLocation({
            latitude,
            longitude,
            city: data.address.city || data.address.town || null,
            suburb: data.address.suburb || data.address.neighbourhood || null,
          })
        } catch {
          setIsDenied(true)
        } finally {
          setIsLoading(false)
        }
      },
      () => {
        setIsDenied(true)
        setIsLoading(false)
      },
    )
  }, [])

  return {
    location,
    isLoading,
    isDenied,
  }
}
