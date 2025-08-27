import { useEffect, useState, lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Investment from './pages/Investment'
import Auth from './pages/Auth'
import { Contact, TermsPrivacy } from './pages/Static'
import Skeleton from './components/Skeleton'

const PropertyDetail = lazy(() => import('./pages/PropertyDetail'))
const Upload = lazy(() => import('./pages/Upload'))
const B2BLeads = lazy(() => import('./pages/B2BLeads'))
const B2BPipeline = lazy(() => import('./pages/B2BPipeline'))

function ThemeToggle() {
	const [dark, setDark] = useState(false)
	useEffect(() => {
		const stored = localStorage.getItem('theme')
		const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
		setDark(isDark)
		document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
	}, [])
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
		localStorage.setItem('theme', dark ? 'dark' : 'light')
	}, [dark])
	return (
		<button className="px-3 py-2 rounded-md border text-sm" onClick={() => setDark(d => !d)}>
			{dark ? 'Light' : 'Dark'} mode
		</button>
	)
}

function Shell() {
	return (
		<div className="min-h-screen token-bg token-text">
			<a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:px-3 focus:py-2 focus:bg-white focus:border">Skip to content</a>
			<header className="sticky top-0 z-10 glass">
				<div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
					<Link to="/" className="font-semibold text-lg">Tripp</Link>
					<nav className="hidden md:flex gap-6 text-sm">
						<Link className="hover:underline" to="/listings">Listings</Link>
						<Link className="hover:underline" to="/investment">Investment</Link>
						<Link className="hover:underline" to="/b2b/leads">Leads</Link>
						<Link className="hover:underline" to="/b2b/pipeline">Pipeline</Link>
					</nav>
					<div className="ml-auto flex items-center gap-3">
						<ThemeToggle />
						<Link to="/auth" className="px-4 py-2 rounded-md border">Login</Link>
						<Link to="/upload" className="bg-[var(--color-primary-600)] text-white px-4 py-2 rounded-md">Post Listing</Link>
					</div>
				</div>
			</header>
			<main id="main" className="max-w-7xl mx-auto px-6 py-10">
				<Suspense fallback={<div className="space-y-4"><Skeleton className="h-6 w-40 rounded" /><Skeleton className="h-40 rounded" /></div>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/listings" element={<Listings />} />
						<Route path="/investment" element={<Investment />} />
						<Route path="/auth" element={<Auth />} />
						<Route path="/terms" element={<TermsPrivacy />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/property/:id" element={<PropertyDetail />} />
						<Route path="/upload" element={<Upload />} />
						<Route path="/b2b/leads" element={<B2BLeads />} />
						<Route path="/b2b/pipeline" element={<B2BPipeline />} />
						<Route path="*" element={<div className="space-y-4"><Skeleton className="h-6 w-40 rounded" /><Skeleton className="h-40 rounded" /></div>} />
					</Routes>
				</Suspense>
			</main>
			<footer className="border-t token-surface">
				<div className="max-w-7xl mx-auto px-4 py-6 text-sm flex items-center gap-4">
					<Link to="/terms" className="hover:underline">Terms & Privacy</Link>
					<Link to="/contact" className="hover:underline">Contact</Link>
				</div>
			</footer>
		</div>
	)
}

function App() {
	return (
		<BrowserRouter>
			<Shell />
		</BrowserRouter>
	)
}

export default App
