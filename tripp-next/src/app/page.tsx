import ImageWithFallback from '@/components/ImageWithFallback'
import Link from 'next/link'
import { listings } from '@/data/listings'

export default function Home() {
	return (
		<div className="space-y-12">
			<section className="mesh-wrap rounded-2xl p-10 border border-card-border relative overflow-hidden card">
				<div className="absolute inset-0 pointer-events-none">
					<div className="mesh mesh-1 absolute inset-0" />
					<div className="mesh mesh-2 absolute inset-0" />
					<div className="mesh mesh-3 absolute inset-0" />
				</div>
				<h1 className="relative text-3xl md:text-4xl font-semibold text-text-primary">Discover, invest, and close with AI and escrow-grade trust</h1>
				<p className="relative mt-3 text-text-secondary max-w-2xl">Search properties with live insights, compare neighborhoods, and start escrow in minutes.</p>
				<form className="relative mt-6 flex gap-2 max-w-2xl" action="/listings" method="get">
					<input 
						name="q" 
						className="flex-1 px-4 py-3 rounded-md border border-card-border bg-card-background text-text-primary placeholder:text-text-muted input" 
						placeholder="City, address, or MLS #" 
					/>
					<button type="submit" className="px-4 py-3 rounded-md bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover-bg transition-colors accent-ring">Search</button>
					<Link href="/escrow" className="px-4 py-3 rounded-md border border-card-border bg-card-background text-text-primary hover:bg-button-secondary-hover-bg transition-colors">Start Escrow</Link>
				</form>
				<div className="relative mt-4 flex flex-wrap gap-2 text-sm">
					<Link className="px-3 py-1.5 rounded-full border border-card-border bg-card-background text-text-primary hover:bg-button-secondary-hover-bg transition-colors" href="/insights">Neighborhood insights</Link>
					<Link className="px-3 py-1.5 rounded-full border border-card-border bg-card-background text-text-primary hover:bg-button-secondary-hover-bg transition-colors" href="/investment">Investment</Link>
					<Link className="px-3 py-1.5 rounded-full border border-card-border bg-card-background text-text-primary hover:bg-button-secondary-hover-bg transition-colors" href="/upload">Post a property</Link>
				</div>
			</section>

			<section>
				<h2 className="text-xl font-medium mb-4 text-text-primary">Featured</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{listings.slice(0, 6).map((l) => (
						<div key={l.id} className="rounded-2xl overflow-hidden border border-card-border accent-ring transition-all card">
							<div className="relative aspect-video">
								<ImageWithFallback src={l.image} alt={l.location} fill className="object-cover" />
								<span className="absolute left-3 top-3 text-xs px-2 py-1 rounded-md bg-black/80 text-white">{l.label}</span>
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
			</section>

			<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<Link href="/insights" className="group rounded-2xl overflow-hidden border border-card-border card accent-ring transition-all">
					<div className="p-6">
						<div className="text-sm text-text-secondary">Neighborhood Highlights</div>
						<h3 className="mt-1 text-lg font-semibold text-text-primary">Trust the area, not a brochure</h3>
						<p className="mt-2 text-sm text-text-secondary">Live safety data, school ratings, amenities and commute insights.</p>
						<div className="mt-4 text-sm underline text-accent-color group-hover:text-accent-hover transition-colors">Explore insights →</div>
					</div>
				</Link>
				<Link href="/escrow" className="group rounded-2xl overflow-hidden border border-card-border card accent-ring transition-all">
					<div className="p-6">
						<div className="text-sm text-text-secondary">Escrow</div>
						<h3 className="mt-1 text-lg font-semibold text-text-primary">Funds protected until you approve</h3>
						<p className="mt-2 text-sm text-text-secondary">Transparent steps and verified documents. Close with confidence.</p>
						<div className="mt-4 text-sm underline text-accent-color group-hover:text-accent-hover transition-colors">See how escrow works →</div>
					</div>
				</Link>
				<Link href="/valuation" className="group rounded-2xl overflow-hidden border border-card-border card accent-ring transition-all">
					<div className="p-6">
						<div className="text-sm text-text-secondary">AI Valuation</div>
						<h3 className="mt-1 text-lg font-semibold text-text-primary">Market signals in plain English</h3>
						<p className="mt-2 text-sm text-text-secondary">Price trends, liquidity, and risk summarized for action.</p>
						<div className="mt-4 text-sm underline text-accent-color group-hover:text-accent-hover transition-colors">View valuation →</div>
					</div>
				</Link>
			</section>
		</div>
	)
}
