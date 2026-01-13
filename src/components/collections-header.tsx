import { Suspense } from 'react'
import SearchInput from './search-bar/search-input'
import SearchInputFallback from './search-bar/search-input-fallback'

export default function CollectionsHeader() {
	return (
		<header className="mb-12 space-y-6 text-center">
			<h1 className="glow-text bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text py-2 font-bold text-5xl text-transparent tracking-tight">
				Cosmic Explorer
			</h1>
			<p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
				Journey through the archives of NASA's most breathtaking
				discoveries. Explore the wonders of the universe.
			</p>

			<Suspense fallback={<SearchInputFallback />}>
				<SearchInput />
			</Suspense>
		</header>
	)
}
