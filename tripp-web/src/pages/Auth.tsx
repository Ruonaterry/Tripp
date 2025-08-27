export default function Auth() {
	return (
		<div className="max-w-md mx-auto p-6 rounded-lg border token-surface">
			<h1 className="text-lg font-semibold mb-4">Login / Signup</h1>
			<form className="space-y-4">
				<input className="w-full px-3 py-2 rounded-md border" placeholder="Email" type="email" />
				<input className="w-full px-3 py-2 rounded-md border" placeholder="Password" type="password" />
				<button className="w-full px-4 py-2 rounded-md bg-[var(--color-primary-600)] text-white">Continue</button>
			</form>
		</div>
	)
}
