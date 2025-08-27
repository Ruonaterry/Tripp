export default function Investment() {
	return (
		<div className="space-y-6">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div className="p-4 rounded-lg border">
					<div className="text-sm text-neutral-500">Portfolio Value</div>
					<div className="text-xl font-semibold">$1.24M</div>
				</div>
				<div className="p-4 rounded-lg border">
					<div className="text-sm text-neutral-500">30d ROI</div>
					<div className="text-xl font-semibold text-green-600">+2.8%</div>
				</div>
				<div className="p-4 rounded-lg border">
					<div className="text-sm text-neutral-500">Cap Rate</div>
					<div className="text-xl font-semibold">5.4%</div>
				</div>
				<div className="p-4 rounded-lg border">
					<div className="text-sm text-neutral-500">Vacancy</div>
					<div className="text-xl font-semibold">3.1%</div>
				</div>
			</div>
			<div>
				<h2 className="font-medium mb-3">Sample Escrow Timeline</h2>
				<ol className="flex items-center gap-3" aria-label="Escrow steps">
					{['Offer','Inspection','Appraisal','Loan','Closing'].map((s, i) => (
						<li key={s} className="flex items-center gap-2">
							<span className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs ${i<=2 ? 'bg-black text-white border-transparent dark:bg-white dark:text-black' : ''}`}>{i+1}</span>
							<span className="text-sm">{s}</span>
						</li>
					))}
				</ol>
			</div>
		</div>
	)
}
