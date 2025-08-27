export type ListingCardProps = {
	price: string
	label?: string
	specs?: string
	location?: string
	imageUrl?: string
	insight?: string
}

export default function ListingCard({ price, label = 'For Sale', specs = '2 Bed • 2 Bath • 1,100 sqft', location = 'San Jose, CA', imageUrl, insight = 'Safe + Schools A-' }: ListingCardProps) {
	return (
		<div className="group rounded-2xl overflow-hidden border bg-white token-surface shadow-sm transition-all duration-300 hover:shadow-lg [background:var(--card-gradient)] relative">
			<div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{boxShadow: '0 0 0 1px var(--ring) inset'}} />
			<div className="relative aspect-video bg-[var(--color-surface-2)]">
				{imageUrl ? <img src={imageUrl} alt="Property" className="w-full h-full object-cover" /> : null}
				<span className="absolute left-3 top-3 text-xs px-2 py-1 rounded-md bg-[var(--color-primary-600)] text-white">{label}</span>
				<span className="absolute right-3 bottom-3 text-xs px-2 py-1 rounded-md glass">{insight}</span>
			</div>
			<div className="p-5">
				<div className="flex items-center justify-between">
					<div className="font-semibold text-lg">{price}</div>
				</div>
				<div className="mt-1 text-sm text-[var(--color-muted)]">{specs}</div>
				<div className="mt-2 text-sm">{location}</div>
				<div className="mt-4 flex justify-between items-center">
					<button className="text-sm underline">View</button>
					<button aria-pressed="false" className="text-sm px-3 py-1.5 rounded-md border transition-colors hover:bg-[var(--color-surface-2)]">Save</button>
				</div>
			</div>
		</div>
	)
}
