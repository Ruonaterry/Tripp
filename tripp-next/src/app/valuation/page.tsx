export default function Valuation() {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">AI Valuation</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div className="p-4 rounded-lg border"><div className="text-sm text-neutral-500">30d Trend</div><div className="text-xl font-semibold text-green-600">+2.4%</div></div>
				<div className="p-4 rounded-lg border"><div className="text-sm text-neutral-500">Median Price</div><div className="text-xl font-semibold">$842k</div></div>
				<div className="p-4 rounded-lg border"><div className="text-sm text-neutral-500">Liquidity</div><div className="text-xl font-semibold">High</div></div>
				<div className="p-4 rounded-lg border"><div className="text-sm text-neutral-500">Risk</div><div className="text-xl font-semibold">Low</div></div>
			</div>
		</div>
	)
}
