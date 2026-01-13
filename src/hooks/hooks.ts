'use client'

import type { Route } from 'next'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'

export function useQueryParam(param: string, defaultValue: string = '') {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	// current value with default
	const value = useMemo(() => {
		const v = searchParams.get(param)
		return v ?? defaultValue
	}, [searchParams, param, defaultValue])

	// setter
	const setValue = useCallback(
		(newValue: string | null) => {
			const params = new URLSearchParams(searchParams.toString())

			if (newValue === null || newValue === '') {
				params.delete(param)
			} else {
				params.set(param, newValue)
			}

			router.push(`${pathname}?${params.toString()}` as Route, {
				scroll: false,
			})
		},
		[router, pathname, searchParams, param],
	)

	return [value, setValue] as const
}
