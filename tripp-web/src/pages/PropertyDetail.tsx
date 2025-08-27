import Skeleton from '../components/Skeleton'

export default function PropertyDetail() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<section className="lg:col-span-2 space-y-4">
				<div className="rounded-xl overflow-hidden border token-surface">
					<div className="aspect-video bg-black/5">
						<Skeleton className="h-full" />
					</div>
					<div className="grid grid-cols-4 gap-2 p-3">
						{Array.from({ length: 8 }).map((_, i) => (
							<Skeleton key={i} className="h-20 rounded-md" />
						))}
					</div>
				</div>
				<div className="p-4 rounded-xl border token-surface">
					<h1 className="h-display text-2xl">$1,095,000 • 3 Bed • 2.5 Bath • 1,860 sqft</h1>
					<p className="mt-1 text-sm text-[var(--color-muted)]">234 Market St, San Francisco, CA</p>
					<div className="mt-4 flex gap-2 text-sm">
						<button className="px-3 py-2 rounded-md border">Contact</button>
						<button className="px-3 py-2 rounded-md bg-[var(--color-primary-600)] text-white">Start Escrow</button>
					</div>
				</div>
				<div className="p-4 rounded-xl border token-surface space-y-3">
					<h2 className="font-medium">Facts & Features</h2>
					<ul className="grid grid-cols-2 gap-2 text-sm">
						<li>Year built: 2016</li>
						<li>HOA: $220/mo</li>
						<li>Lot: 3,200 sqft</li>
						<li>Type: Townhouse</li>
					</ul>
				</div>
			</section>
			<aside className="space-y-4">
				<div className="p-4 rounded-xl border token-surface">
					<h3 className="font-medium mb-2">Neighborhood Insights</h3>
					<ul className="space-y-1 text-sm">
						<li>Security: High</li>
						<li>Amenities: Excellent</li>
						<li>Schools: A-</li>
						<li>Transit: Good</li>
					</ul>
				</div>
				<div className="p-4 rounded-xl border token-surface">
					<h3 className="font-medium mb-2">Agent</h3>
					<div className="text-sm">Jane Doe • Tripp Realty</div>
					<button className="mt-2 px-3 py-2 rounded-md border w-full">Message Agent</button>
				</div>
			</aside>
		</div>
	)
}
