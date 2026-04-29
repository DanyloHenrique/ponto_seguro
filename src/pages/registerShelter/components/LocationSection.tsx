import { TbMap2 } from 'react-icons/tb'
import { Input } from '@/components/input/Input'
import type { inputShelter } from '@/types/shelter'

type LocationShelterProps = {
  errors: Record<string, string>
  shelter: inputShelter
  setShelter: React.Dispatch<React.SetStateAction<inputShelter>>
}

export const LocationShelter = ({
  shelter,
  setShelter,
  errors,
}: LocationShelterProps) => {
  const fetchLocation = async () => {
    try {
      if (!shelter.address || shelter.address.trim() === '') return

      setShelter((prev) => ({
        ...prev,
        latitude: 'Buscando...',
        longitude: 'Buscando...',
      }))

      const query = encodeURIComponent(`${shelter.address}, Brasil`)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`,
      )
      const data = await response.json()

      if (data && data.length > 0) {
        setShelter((prev) => ({
          ...prev,
          latitude: data[0].lat,
          longitude: data[0].lon,
        }))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h3 className="mb-2 font-semibold text-lg">Seção 2 - Localização</h3>
      <section className="flex flex-col gap-4 rounded-2xl bg-white px-3 py-4 text-left align-center">
        <div>
          <Input.Root>
            <Input.Label htmlFor="shelter-address">
              Endereço completo:
            </Input.Label>
            <Input.Control
              id="shelter-address"
              type="text"
              placeholder="Rua, n°, bairro, cidade"
              required
              value={shelter.address}
              onChange={(e) =>
                setShelter({
                  ...shelter,
                  address: e.target.value,
                })
              }
              onBlur={fetchLocation}
            />
          </Input.Root>
          {errors.name && <span className="text-alert">{errors.name}</span>}
        </div>

        <div className="my-2 flex items-center gap-2 text-alert">
          <TbMap2 size={24} />
          <p>Latitude e longitude serão buscados automaticamente</p>
        </div>

        <div className="flex gap-4">
          <Input.Root>
            <Input.Label htmlFor="shelter-latitude">Latitude:</Input.Label>
            <Input.Control
              id="shelter-latitude"
              type="text"
              placeholder="aguardando..."
              required
              disabled
              value={shelter.latitude}
              onChange={(e) =>
                setShelter({
                  ...shelter,
                  latitude: e.target.value,
                })
              }
            />
          </Input.Root>

          <Input.Root>
            <Input.Label htmlFor="shelter-longitude">Longitude:</Input.Label>
            <Input.Control
              id="shelter-longitude"
              type="text"
              placeholder="aguardando..."
              required
              disabled
              value={shelter.longitude}
              onChange={(e) =>
                setShelter({
                  ...shelter,
                  longitude: e.target.value,
                })
              }
            />
          </Input.Root>
        </div>
      </section>
    </>
  )
}
