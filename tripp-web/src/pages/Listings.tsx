import Filters from '../components/Filters'
import ListingCard from '../components/ListingCard'

export default function Listings() {
	return (
		<div className="flex gap-6">
			<Filters />
			<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{Array.from({ length: 12 }).map((_, i) => (
					<ListingCard key={i} price={`$${700 + i * 5}k`} />
				))}
			</div>
		</div>
	)
}
