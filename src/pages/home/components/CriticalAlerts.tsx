export type AlertItem = {
  id: string
  title: string
  description: string
  severity: 'critical' | 'warning'
}

const alertasMock: AlertItem[] = [
  {
    id: '1',
    title: 'Previsão de Chuvas Intensas',
    description:
      'Aumento do nível do rio Guaíba previsto para as próximas 6 horas.',
    severity: 'critical',
  },
  {
    id: '2',
    title: 'Logística de Alimentos',
    description:
      'Caminhão de suprimentos atrasado devido ao bloqueio na BR-116.',
    severity: 'warning',
  },
]



export const CriticalAlerts = ({
  alertas = alertasMock,
}: {
  alertas?: AlertItem[]
}) => {
  return (
    <section className="flex w-full flex-col gap-6 rounded-[20px] bg-surface p-6 shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-alert-100 font-black text-alert-700 text-xs">
          !
        </div>
        <h3 className="font-medium text-lg text-white tracking-wide">
          Alertas Críticos
        </h3>
      </div>

      <div className="flex flex-col gap-6">
        {alertas.length > 0 ? (
          alertas.map((alerta) => (
            <div
              key={alerta.id}
              className={`flex flex-col border-l-[3px] py-0.5 pl-4 ${
                alerta.severity === 'critical'
                  ? 'border-alert'
                  : 'border-yellow-400'
              }`}
            >
              <h4 className="mb-2 font-bold text-lg text-white leading-tight">
                {alerta.title}
              </h4>
              <p className="pr-2 text-surface-300 leading-relaxed">
                {alerta.description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-surface">
            Nenhum alerta crítico no momento.
          </p>
        )}
      </div>
    </section>
  )
}
