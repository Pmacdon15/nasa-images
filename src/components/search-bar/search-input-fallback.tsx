export default function SearchInputFallback() {
	return (
		<div className="group relative mx-auto max-w-xl">
			<input
				className="search-input w-full rounded-2xl px-6 py-4 text-lg text-white placeholder-slate-400 shadow-2xl transition-all duration-300"
				name="search"
				placeholder="Search the cosmos (e.g. Mars, Apollo, Galaxy)..."
				type="text"
			/>
			<button
				className="absolute top-2 right-3 bottom-2 rounded-xl bg-accent px-8 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95"
				type="button"
			>
				Search
			</button>
		</div>
	)
}
