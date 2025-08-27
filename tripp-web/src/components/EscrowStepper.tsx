export type EscrowStepperProps = {
	step: number
	steps?: string[]
}

const defaultSteps = ['Offer', 'Inspection', 'Appraisal', 'Loan', 'Closing']

export default function EscrowStepper({ step, steps = defaultSteps }: EscrowStepperProps) {
	return (
		<ol className="flex items-center gap-3" aria-label="Escrow steps">
			{steps.map((label, idx) => {
				const current = idx === step
				const done = idx < step
				return (
					<li key={label} className="flex items-center gap-2">
						<span
							className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs ${done ? 'bg-[var(--color-success)] text-white border-transparent' : current ? 'bg-[var(--color-primary-600)] text-white border-transparent' : ''}`}
							aria-current={current ? 'step' : undefined}
						>
							{idx + 1}
						</span>
						<span className="text-sm">{label}</span>
					</li>
				)
			})}
		</ol>
	)
}
