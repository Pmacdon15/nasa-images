'use client'

import { Activity, Suspense, useState } from 'react'
import { useQueryParam } from '@/hooks/hooks'
import PaginationButtons from './pagination-buttons'

export default function CollectionsParent({
	child1,
	child2,
}: {
	child1: React.ReactNode
	child2: React.ReactNode
}) {
	const [imageOrVideo, setImageOrVIdeo] = useState<'image' | 'video'>('image')
	const [_page, setPage] = useQueryParam('page', '1')
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-center gap-4 p-8">
				<button
					className="rounded-md bg-accent p-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95"
					onClick={() => {
						setImageOrVIdeo('image')
						setPage('1')
					}}
					type="button"
				>
					Images
				</button>
				<button
					className="rounded-md bg-accent p-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95"
					onClick={() => {
						setPage('1')
						setImageOrVIdeo('video')
					}}
					type="button"
				>
					Videos
				</button>
			</div>
			{/* <PaginationButtons /> */}
			<Activity mode={imageOrVideo === 'image' ? 'visible' : 'hidden'}>
				<Suspense>{child1}</Suspense>
			</Activity>
			<Activity mode={imageOrVideo !== 'image' ? 'visible' : 'hidden'}>
				<Suspense>{child2}</Suspense>
			</Activity>
			<Suspense>
				<PaginationButtons />
			</Suspense>
		</div>
	)
}
