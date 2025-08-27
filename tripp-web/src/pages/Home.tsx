import SearchBar from '../components/SearchBar'
import ListingCard from '../components/ListingCard'

export default function Home() {
	return (
		<div className="space-y-10">
			<section className="rounded-2xl p-10 token-surface border bg-[radial-gradient(1200px_500px_at_10%_-20%,rgba(32,201,151,0.08),transparent)]">
				<h1 className="h-display text-3xl md:text-4xl">Exquisite property journeys, escrow-secured</h1>
				<p className="mt-3 text-[var(--color-muted)] max-w-2xl">One registration. Fluid buyer/seller roles. AI-led valuation and insights with neighborhood clarity.</p>
				<div className="mt-7 max-w-3xl">
					<SearchBar />
				</div>
				<div className="mt-5 flex flex-wrap gap-2 text-sm">
					<a className="px-3 py-1.5 rounded-full border" href="/listings">Browse listings</a>
					<a className="px-3 py-1.5 rounded-full border" href="/investment">Investment</a>
					<a className="px-3 py-1.5 rounded-full border" href="/upload">Post a property</a>
				</div>
			</section>

			<section>
				<h2 className="h-display text-xl mb-4">Featured</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{Array.from({ length: 9 }).map((_, i) => (
						<ListingCard key={i} price={`$${(720 + i * 7).toLocaleString()}k`} />
					))}
				</div>
			</section>
		</div>
	)
}
