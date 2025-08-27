import { useId } from 'react'

export default function Filters() {
	const priceId = useId()
	const bedsId = useId()
	return (
		<aside className="p-4 rounded-lg border token-surface w-full md:w-72">
			<h2 className="font-medium mb-3">Filters</h2>
			<div className="space-y-4">
				<div>
					<label className="text-sm" htmlFor={priceId}>Max price</label>
					<input id={priceId} type="number" className="mt-1 w-full px-3 py-2 rounded-md border" placeholder="$" />
				</div>
				<div>
					<label className="text-sm" htmlFor={bedsId}>Bedrooms</label>
					<select id={bedsId} className="mt-1 w-full px-3 py-2 rounded-md border">
						<option>Any</option>
						<option>1+</option>
						<option>2+</option>
						<option>3+</option>
					</select>
				</div>
				<button className="w-full px-3 py-2 rounded-md border">Apply</button>
			</div>
		</aside>
	)
}
