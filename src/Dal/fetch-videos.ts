import { cacheTag } from 'next/cache'
import type { NasaApiItem, NasaVideo } from '@/types/images-types'

async function getVideoUrl(collectionUrl: string): Promise<string | null> {
	try {
		const res = await fetch(collectionUrl)
		if (!res.ok) return null
		const collection: (string | { href: string })[] = await res.json()
		// Find the first .mp4 link
		for (const item of collection) {
			if (typeof item === 'string' && item.endsWith('.mp4')) {
				return item
			}
			if (
				typeof item === 'object' &&
				'href' in item &&
				item.href.endsWith('.mp4')
			) {
				return item.href
			}
		}
	} catch (error) {
		console.error('Failed to fetch video collection', error)
		return null
	}
	return null
}

export async function fetchVideos(
	q: string = 'apollo 11',
	page: number = 1,
): Promise<NasaVideo[]> {
	'use cache'
	cacheTag(`videos-page-${page}-query${q}`)

	const res = await fetch(
		`https://images-api.nasa.gov/search?q=${encodeURIComponent(
			q,
		)}&media_type=video&page=${page}`,
	)

	if (!res.ok) {
		throw new Error('Failed to fetch videos')
	}

	const data = await res.json()
	const items: NasaApiItem[] = data?.collection?.items ?? []

	const videoPromises = items.map(async (item) => {
		const meta = item.data[0]
		const previewImage = item.links?.find((link) => link.rel === 'preview')

		// The video URL is in a separate JSON file
		const videoUrl = await getVideoUrl(item.href)

		return {
			id: meta.nasa_id,
			title: meta.title,
			description: meta.description,
			previewImageUrl: previewImage?.href ?? null,
			videoUrl: videoUrl,
			date: meta.date_created,
			center: meta.center,
		}
	})

	return Promise.all(videoPromises)
}
