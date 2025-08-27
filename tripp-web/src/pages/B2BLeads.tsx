export default function B2BLeads() {
	return (
		<div className="space-y-4">
			<h1 className="h-display text-2xl">Leads</h1>
			<div className="rounded-xl border token-surface overflow-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="text-left border-b">
							<th className="p-3">Name</th>
							<th className="p-3">Interest</th>
							<th className="p-3">Budget</th>
							<th className="p-3">Score</th>
							<th className="p-3">Last Contact</th>
						</tr>
					</thead>
					<tbody>
						{[['Alice', 'SF Condo', '$1.1M', 'A', '2d'], ['Ben', 'LA House', '$800k', 'B', '5d'], ['Chen', 'NY Loft', '$2.0M', 'A', '1d']].map((r) => (
							<tr key={r[0]} className="border-b">
								<td className="p-3">{r[0]}</td>
								<td className="p-3">{r[1]}</td>
								<td className="p-3">{r[2]}</td>
								<td className="p-3"><span className={`px-2 py-1 rounded-md border ${r[3] === 'A' ? 'bg-[var(--color-success)] text-white border-transparent' : ''}`}>{r[3]}</span></td>
								<td className="p-3">{r[4]}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
