'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useQueryParam } from '@/hooks/hooks'

export default function TypeOfButtons({
	setTypeOf,
}: {
	setTypeOf: Dispatch<SetStateAction<'image' | 'video' | 'mars-weather'>>
}) {
	const [_page, setPage] = useQueryParam('page', '1')
	return (
		<div className="flex items-center justify-center gap-4 p-8">
			<button
				className="rounded-md bg-accent p-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95"
				onClick={() => {
					setPage('1')
					setTypeOf('image')
				}}
				type="button"
			>
				Images
			</button>
			<button
				className="rounded-md bg-accent p-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95"
				onClick={() => {
					setPage('1')
					setTypeOf('video')
				}}
				type="button"
			>
				Videos
			</button>
			<button
				className="rounded-md bg-accent p-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95"
				onClick={() => {
					setPage('1')
					setTypeOf('mars-weather')
				}}
				type="button"
			>
				Mars Weather
			</button>
		</div>
	)
}
