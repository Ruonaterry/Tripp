'use client'
import ImageWithFallback from '@/components/ImageWithFallback'
import Link from 'next/link'
import { getAllProperties } from '@/data/listings'
import { useSearchParams, useRouter } from 'next/navigation'
import { useMemo, useState, useEffect } from 'react'

function parsePrice(price: string): number {
	return Number(price.replace(/[^0-9.]/g, '')) || 0
}
function parseBeds(specs: string): number | null {
	const m = specs.match(/(\d+(?:\.\d+)?)\s*Bed/i)
	return m ? Number(m[1]) : null
}

export default function Listings() {
	const params = useSearchParams()
	const router = useRouter()

	const initialQ = params.get('q') ?? ''
	const initialMax = params.get('max') ?? ''
	const initialBeds = params.get('beds') ?? ''

	const [q, setQ] = useState(initialQ)
	const [max, setMax] = useState(initialMax)
	const [beds, setBeds] = useState(initialBeds)

	useEffect(() => {
		setQ(initialQ)
		setMax(initialMax)
		setBeds(initialBeds)
	}, [initialQ, initialMax, initialBeds])

	// Get all properties including user-added ones
	const allListings = getAllProperties()

	const filtered = useMemo(() => {
		return allListings.filter((l) => {
			const matchesQ = q ? [l.location, l.specs, l.price].some((v) => v.toLowerCase().includes(q.toLowerCase())) : true
			const priceOk = max ? parsePrice(l.price) <= Number(max) : true
			const bedsNeeded = beds ? Number(beds.replace('+', '')) : null
			const listingBeds = parseBeds(l.specs)
			const bedsOk = bedsNeeded ? (listingBeds ? listingBeds >= bedsNeeded : true) : true
			return matchesQ && priceOk && bedsOk
		})
	}, [q, max, beds, allListings])

	function applyFilters() {
		const sp = new URLSearchParams()
		if (q) sp.set('q', q)
		if (max) sp.set('max', max)
		if (beds) sp.set('beds', beds)
		router.push(`/listings?${sp.toString()}`)
	}

	return (
		<div className="flex gap-6">
			<aside className="p-4 rounded-lg border border-card-border w-full md:w-72 card">
				<h2 className="font-medium mb-3 text-text-primary">Filters</h2>
				<div className="space-y-3 text-sm">
					<input 
						value={q} 
						onChange={(e) => setQ(e.target.value)} 
						className="w-full px-3 py-2 rounded-md border border-card-border bg-card-background text-text-primary placeholder:text-text-muted input" 
						placeholder="Search (city, address)" 
					/>
					<input 
						value={max} 
						onChange={(e) => setMax(e.target.value)} 
						className="w-full px-3 py-2 rounded-md border border-card-border bg-card-background text-text-primary placeholder:text-text-muted input" 
						placeholder="Max price (e.g. 900000)" 
					/>
					<select 
						value={beds} 
						onChange={(e) => setBeds(e.target.value)} 
						className="w-full px-3 py-2 rounded-md border border-card-border bg-card-background text-text-primary input"
					>
						<option value="">Bedrooms (any)</option>
						<option value="1+">1+</option>
						<option value="2+">2+</option>
						<option value="3+">3+</option>
						<option value="4+">4+</option>
					</select>
					<button 
						onClick={applyFilters} 
						className="w-full px-3 py-2 rounded-md bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover-bg transition-colors"
					>
						Apply
					</button>
				</div>
			</aside>
			<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{filtered.map((l) => (
					<div key={l.id} className="rounded-2xl overflow-hidden border border-card-border card">
						<div className="relative aspect-video">
							<ImageWithFallback src={l.image} alt={l.location} fill className="object-cover" />
							<span className="absolute left-3 top-3 text-xs px-2 py-1 rounded-md bg-black text-white/90 dark:bg-white dark:text-black">{l.label}</span>
						</div>
						<div className="p-5">
							<div className="flex items-center justify-between">
								<div className="font-semibold text-lg text-text-primary">{l.price}</div>
							</div>
							<div className="mt-1 text-sm text-text-secondary">{l.specs}</div>
							<div className="mt-2 text-sm text-text-primary">{l.location}</div>
							<div className="mt-4 flex justify-between items-center">
								<Link className="text-sm underline text-accent-color hover:text-accent-hover transition-colors" href={`/property/${l.id}`}>View</Link>
								<button className="text-sm px-3 py-1.5 rounded-md bg-button-secondary-bg text-button-secondary-text hover:bg-button-secondary-hover-bg transition-colors">Save</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
