'use client'

import { Activity, Suspense, useState } from 'react'
import PaginationButtons from './pagination-buttons'
import TypeOfButtons from './type-of-buttons'

export default function CollectionsParent({
	child1,
	child2,
	child3,
}: {
	child1: React.ReactNode
	child2: React.ReactNode
	child3: React.ReactNode
}) {
	const [typeOfDisplay, setTypeOfDisplay] = useState<
		'image' | 'video' | 'mars-weather'
	>('image')
	// const [page, setPage] = useQueryParam('page', '1')
	return (
		<div className="flex flex-col">
			<Suspense>
				<TypeOfButtons setTypeOf={setTypeOfDisplay} />
			</Suspense>

			<Activity mode={typeOfDisplay === 'image' ? 'visible' : 'hidden'}>
				<Suspense>{child1}</Suspense>
			</Activity>

			<Activity mode={typeOfDisplay === 'video' ? 'visible' : 'hidden'}>
				<Suspense>{child2}</Suspense>
			</Activity>

			<Activity
				mode={typeOfDisplay === 'mars-weather' ? 'visible' : 'hidden'}
			>
				{/* <Suspense>{child3}</Suspense> */}
				{child3}
			</Activity>

			<Suspense>
				<Activity
					mode={
						typeOfDisplay !== 'mars-weather' ? 'visible' : 'hidden'
					}
				>
					<PaginationButtons />
				</Activity>
			</Suspense>
		</div>
	)
}
