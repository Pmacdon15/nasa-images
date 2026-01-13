'use client'

import { Activity, Suspense, useState } from 'react'

export default function CollectionsParent({
	child1,
	child2,
}: {
	child1: React.ReactNode
	child2: React.ReactNode
}) {
	const [imageOrVideo, setImageOrVIdeo] = useState<'image' | 'video'>('image')
	return (
		<div className="flex flex-col ">
			<div className="flex items-center justify-center p-8 gap-4">
				<button
					className="rounded-md bg-accent p-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95"
					onClick={() => setImageOrVIdeo('image')}
					type="button"
				>
					Images
				</button>
				<button
					className="rounded-md bg-accent p-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95"
					onClick={() => setImageOrVIdeo('video')}
					type="button"
				>
					Videos
				</button>
			</div>
			<Activity mode={imageOrVideo === 'image' ? 'visible' : 'hidden'}>
				<Suspense>{child1}</Suspense>
			</Activity>
			<Activity mode={imageOrVideo !== 'image' ? 'visible' : 'hidden'}>
				<Suspense>{child2}</Suspense>
			</Activity>
		</div>
	)
}
