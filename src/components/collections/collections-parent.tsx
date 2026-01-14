'use client'

import { Activity, Suspense, useState } from 'react'
import ImageOrVideoButtons from './image-or-video'
import PaginationButtons from './pagination-buttons'

export default function CollectionsParent({
	child1,
	child2,
}: {
	child1: React.ReactNode
	child2: React.ReactNode
}) {
	const [imageOrVideo, setImageOrVIdeo] = useState<'image' | 'video'>('image')
	// const [page, setPage] = useQueryParam('page', '1')
	return (
		<div className="flex flex-col">
			<Suspense>
				<ImageOrVideoButtons setImageOrVideo={setImageOrVIdeo} />
			</Suspense>
			{/* <PaginationButtons /> */}
			<Activity mode={imageOrVideo === 'image' ? 'visible' : 'hidden'}>
				<Suspense>{child1}</Suspense>
				{/* {child1} */}
			</Activity>
			<Activity mode={imageOrVideo !== 'image' ? 'visible' : 'hidden'}>
				<Suspense>{child2}</Suspense>
				{/* {child2} */}
			</Activity>
			<Suspense>
				<PaginationButtons />
			</Suspense>
		</div>
	)
}
