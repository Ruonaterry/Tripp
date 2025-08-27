export default function Upload() {
	return (
		<div className="max-w-3xl mx-auto space-y-6">
			<h1 className="h-display text-2xl">Post a Property</h1>
			<div className="rounded-xl border token-surface p-4">
				<div className="border border-dashed rounded-xl p-8 text-center">
					<div className="text-sm text-[var(--color-muted)]">Drag & drop photos or click to upload</div>
					<button className="mt-3 px-3 py-2 rounded-md border">Choose files</button>
				</div>
				<form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
					<input className="px-3 py-2 rounded-md border" placeholder="Title" />
					<input className="px-3 py-2 rounded-md border" placeholder="Price" />
					<input className="px-3 py-2 rounded-md border md:col-span-2" placeholder="Address" />
					<textarea className="px-3 py-2 rounded-md border md:col-span-2" placeholder="Description" rows={6} />
					<button className="px-4 py-2 rounded-md bg-[var(--color-primary-600)] text-white md:col-span-2">Publish</button>
				</form>
			</div>
		</div>
	)
}
