export default function CollectionsPlaceHolder({
	collectionsLength,
}: {
	collectionsLength: number
}) {
	return (
		<>
			{collectionsLength === 0 && (
				<div className="col-span-3 space-y-6 py-32 text-center">
					<div className="animate-pulse text-6xl text-slate-700">
						??
					</div>
					<div className="space-y-2">
						<p className="font-bold text-3xl text-slate-300">
							No celestial bodies found
						</p>
						<p className="mx-auto max-w-md text-slate-500">
							Even the vastest space can be empty. Try searching
							for something else, like "Jupiter", "Black Hole", or
							"Nebula".
						</p>
					</div>
				</div>
			)}
		</>
	)
}
