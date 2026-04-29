type BarProgressProps = {
  percentage: number
}

export const BarProgress = ({ percentage }: BarProgressProps) => {
  return (
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
  )
}
