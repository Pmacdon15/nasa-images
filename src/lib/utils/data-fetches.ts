import type { NasaApiItem, NasaImage } from '@/types/images-types'
import { cacheLife } from 'next/cache'

export async function fetchImages(
    q: string = 'nebula',
    page: number = 1,
): Promise<NasaImage[]> {
    'use cache: remote'
    cacheLife("hours")
    // cacheTag(`images-page-${page}-query${q}`)
    const res = await fetch(
        `https://images-api.nasa.gov/search?q=${encodeURIComponent(
            q,
        )}&media_type=image&page=${page}`,
    )

    if (!res.ok) {
        throw new Error('Failed to fetch image types')
    }

    const data = await res.json()

    const items: NasaApiItem[] = data?.collection?.items ?? []

    // console.log("items: ", items)
    return (
        items
            // .slice(0, 5) // 👈 first 5 only
            .map((item) => {
                const meta = item.data[0]
                const image = item.links?.find(
                    (link) => link.render === 'image',
                )

                return {
                    id: meta.nasa_id,
                    title: meta.title,
                    description: meta.description,
                    imageUrl: image?.href ?? null,
                    date: meta.date_created,
                    center: meta.center,
                }
            })
    )
}
