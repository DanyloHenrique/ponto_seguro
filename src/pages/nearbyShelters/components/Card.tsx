import { useState } from 'react'

type CardProps = {
  name: string
  address: string
  capacity_max: number
  capacity_current: number
  distance_in_km: number
}

export const Card = ({
  name,
  address,
  capacity_current,
  capacity_max,
  distance_in_km,
}: CardProps) => {
  const [isCrowded] = useState(capacity_current >= capacity_max)
  const percentage = Math.min((capacity_current / capacity_max) * 100, 100)

  return (
    <article className="rounded-xl border border-white bg-white p-4 shadow transition-colors duration-300 hover:border-safe-500">
      <div className="flex justify-between align-center">
        {isCrowded ? (
          <span className="rounded-lg bg-surface-200 px-3 py-1">Lotado</span>
        ) : (
          <span className="rounded-lg bg-safe-500 px-3 py-1">Disponível</span>
        )}

        <span>{distance_in_km} km</span>
      </div>
      <h2 className="my-1 font-bold text-xl">{name}</h2>
      <p className="mb-4 text-surface">{address}</p>

      <div>
        <div className="flex justify-between align-center">
          <p className="text-surface">ocupação</p>
          <p className="font-semibold text-lg">
            {capacity_current} / {capacity_max} vagas
          </p>
        </div>
        {/* bar progress */}
        <div style={{ width: '100%', marginTop: '8px' }}>
          <div
            style={{
              height: '8px',
              backgroundColor: '#E0E0E0',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${percentage}%`,
                height: '100%',
                backgroundColor: '#00F5D4',
                transition: 'width 0.5s ease-in-out',
              }}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
