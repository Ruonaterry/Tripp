export function TermsPrivacy() {
	return (
		<div className="prose dark:prose-invert max-w-3xl">
			<h1>Terms & Privacy</h1>
			<p>Our commitment to secure escrow, fair listings, and data protection.</p>
		</div>
	)
}

export function Contact() {
	return (
		<div className="max-w-lg space-y-3">
			<h1 className="text-lg font-semibold">Contact</h1>
			<input className="w-full px-3 py-2 rounded-md border" placeholder="Your email" />
			<textarea className="w-full px-3 py-2 rounded-md border" placeholder="Message" rows={5} />
			<button className="px-4 py-2 rounded-md border">Send</button>
		</div>
	)
}
