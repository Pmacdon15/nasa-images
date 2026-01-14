'use client'

import { useQueryParam } from '@/hooks/hooks'

export default function PaginationButtons() {
	const [page, setPage] = useQueryParam('page', '1')

	const handleBack = () => {
		const newPage = Math.max(1, Number(page) - 1)
		setPage(String(newPage))
	}

	const handleNext = () => {
		const newPage = Number(page) + 1
		setPage(String(newPage))
	}

	return (
		<div className="flex items-center justify-between gap-4 p-8">
			<button
				className="rounded-md bg-accent p-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95 disabled:opacity-50"
				disabled={page === '1'}
				onClick={handleBack}
				type="button"
			>
				Back
			</button>
			Page {page}
			<button
				className="rounded-md bg-accent p-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95"
				onClick={handleNext}
				type="button"
			>
				Next
			</button>
		</div>
	)
}
