export default function B2BPipeline() {
	const columns = [
		{ name: 'New', items: ['Lead 1', 'Lead 2'] },
		{ name: 'Contacted', items: ['Lead 3'] },
		{ name: 'Negotiation', items: ['Lead 4'] },
		{ name: 'Won', items: ['Lead 5'] },
	]
	return (
		<div className="space-y-4">
			<h1 className="h-display text-2xl">Pipeline</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{columns.map((col) => (
					<div key={col.name} className="rounded-xl border token-surface p-3">
						<div className="font-medium text-sm mb-2">{col.name}</div>
						<div className="space-y-2">
							{col.items.map((i) => (
								<div key={i} className="rounded-md border p-2 text-sm">{i}</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
