import EscrowStepper from '../components/EscrowStepper'

export default function Investment() {
	return (
		<div className="space-y-6">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div className="p-4 rounded-lg border token-surface">
					<div className="text-sm text-[var(--color-muted)]">Portfolio Value</div>
					<div className="text-xl font-semibold">$1.24M</div>
				</div>
				<div className="p-4 rounded-lg border token-surface">
					<div className="text-sm text-[var(--color-muted)]">30d ROI</div>
					<div className="text-xl font-semibold text-[var(--color-success)]">+2.8%</div>
				</div>
				<div className="p-4 rounded-lg border token-surface">
					<div className="text-sm text-[var(--color-muted)]">Cap Rate</div>
					<div className="text-xl font-semibold">5.4%</div>
				</div>
				<div className="p-4 rounded-lg border token-surface">
					<div className="text-sm text-[var(--color-muted)]">Vacancy</div>
					<div className="text-xl font-semibold">3.1%</div>
				</div>
			</div>
			<div>
				<h2 className="font-medium mb-3">Sample Escrow Timeline</h2>
				<EscrowStepper step={2} />
			</div>
		</div>
	)
}
