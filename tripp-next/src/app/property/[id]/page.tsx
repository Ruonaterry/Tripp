'use client'
import Image from 'next/image'
import { getAllProperties } from '@/data/listings'
import { useState, use } from 'react'

type Props = { params: Promise<{ id: string }> }

export default function PropertyDetail({ params }: Props) {
	const { id } = use(params)
	const allListings = getAllProperties()
	const listing = allListings.find(l => l.id === id)
	const [showMsg, setShowMsg] = useState(false)
	const [saved, setSaved] = useState(false)

	if (!listing) {
		return <div className="text-center py-12 text-text-primary">Property not found.</div>
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<section className="lg:col-span-2 space-y-4">
				<div className="relative aspect-video rounded-xl overflow-hidden border border-card-border">
					<Image
						src={listing.image}
						alt={listing.location}
						fill
						className="object-cover"
					/>
				</div>

				<div className="p-4 rounded-xl border border-card-border card">
					<h1 className="text-2xl font-semibold text-text-primary">{listing.price} • {listing.specs}</h1>
					<p className="mt-1 text-sm text-text-secondary">{listing.location}</p>
					{listing.title && <p className="mt-2 text-lg font-medium text-text-primary">{listing.title}</p>}
					<div className="mt-4 flex gap-2 text-sm">
						<button 
							className="px-3 py-2 rounded-md border border-card-border bg-card-background text-text-primary hover:bg-button-secondary-hover-bg transition-colors" 
							onClick={() => setShowMsg(true)}
						>
							Message Agent
						</button>
						<button className="px-3 py-2 rounded-md bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover-bg transition-colors">
							Start Escrow
						</button>
						<button 
							className="px-3 py-2 rounded-md border border-card-border bg-card-background text-text-primary hover:bg-button-secondary-hover-bg transition-colors" 
							onClick={() => setSaved(true)}
						>
							{saved ? 'Saved ✓' : 'Save'}
						</button>
					</div>
				</div>

				<div className="p-4 rounded-xl border border-card-border card space-y-3">
					<h2 className="font-medium text-text-primary">Facts & Features</h2>
					<ul className="grid grid-cols-2 gap-2 text-sm">
						<li className="text-text-secondary">Year built: <span className="text-text-primary">{listing.yearBuilt || '2016'}</span></li>
						<li className="text-text-secondary">HOA: <span className="text-text-primary">₦220,000/mo</span></li>
						<li className="text-text-secondary">Lot: <span className="text-text-primary">{listing.specs.split('•')[2]?.trim() || '320 sqm'}</span></li>
						<li className="text-text-secondary">Type: <span className="text-text-primary">{listing.propertyType || 'Townhouse'}</span></li>
					</ul>
					{listing.description && (
						<div className="mt-4">
							<h3 className="font-medium mb-2 text-text-primary">Description</h3>
							<p className="text-sm text-text-secondary">{listing.description}</p>
						</div>
					)}
				</div>
			</section>

			<aside className="space-y-4">
				<div className="p-4 rounded-xl border border-card-border card">
					<h3 className="font-medium mb-3 text-text-primary">Contact Agent</h3>
					<div className="space-y-2 text-sm">
						<p className="text-text-secondary">John Doe</p>
						<p className="text-text-secondary">+234 801 234 5678</p>
						<p className="text-text-secondary">john.doe@tripp.ng</p>
					</div>
					<button className="w-full mt-4 px-3 py-2 rounded-md bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover-bg transition-colors">
						Contact Now
					</button>
				</div>

				<div className="p-4 rounded-xl border border-card-border card">
					<h3 className="font-medium mb-3 text-text-primary">Neighborhood</h3>
					<div className="space-y-2 text-sm">
						<div className="flex justify-between">
							<span className="text-text-secondary">Safety</span>
							<span className="text-success-color">A+</span>
						</div>
						<div className="flex justify-between">
							<span className="text-text-secondary">Schools</span>
							<span className="text-success-color">A-</span>
						</div>
						<div className="flex justify-between">
							<span className="text-text-secondary">Transit</span>
							<span className="text-warning-color">Good</span>
						</div>
					</div>
				</div>
			</aside>

			{showMsg && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
					<div className="bg-card-background border border-card-border rounded-xl p-6 max-w-md w-full">
						<h3 className="font-medium mb-4 text-text-primary">Message Agent</h3>
						<textarea 
							className="w-full p-3 rounded-lg border border-card-border bg-card-background text-text-primary placeholder:text-text-muted input" 
							rows={4} 
							placeholder="Type your message here..."
						/>
						<div className="flex gap-2 mt-4">
							<button 
								className="flex-1 px-3 py-2 rounded-md border border-card-border bg-card-background text-text-primary hover:bg-button-secondary-hover-bg transition-colors" 
								onClick={() => setShowMsg(false)}
							>
								Cancel
							</button>
							<button className="flex-1 px-3 py-2 rounded-md bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover-bg transition-colors">
								Send
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
