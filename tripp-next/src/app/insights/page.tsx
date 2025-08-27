export default function Insights() {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">Neighborhood Highlights</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="p-5 rounded-xl border">
					<div className="text-sm text-neutral-500">Security</div>
					<div className="mt-2">High • Low incident rate</div>
				</div>
				<div className="p-5 rounded-xl border">
					<div className="text-sm text-neutral-500">Schools</div>
					<div className="mt-2">Average grade A-</div>
				</div>
				<div className="p-5 rounded-xl border">
					<div className="text-sm text-neutral-500">Transit</div>
					<div className="mt-2">Good • 8 lines within 1km</div>
				</div>
			</div>
		</div>
	)
}
