import { Suspense } from 'react'
import CollectionsDisplayImages from '@/components/collections/collections-display-images'
import CollectionsDisplayVideos from '@/components/collections/collections-display-videos'
import CollectionsHeader from '@/components/collections/collections-header'
import CollectionsParent from '@/components/collections/collections-parent'
import { fetchImages } from '@/Dal/fetch-types-of-images'
import { fetchVideos } from '@/Dal/fetch-videos'
import MarsWeather from '@/components/mars-weather/MarsWeather'

export default async function NasaImagesPage(props: PageProps<'/'>) {
	const collectionsVideosPromise = props.searchParams.then((params) =>
		fetchVideos(
			String(params.search) !== 'undefined'
				? String(params.search)
				: 'nebula',
			Number(params.page) || 1,
		),
	)

	const collectionsImagesPromise = props.searchParams.then((params) =>
		fetchImages(
			String(params.search) !== 'undefined'
				? String(params.search)
				: 'nebula',
			Number(params.page) || 1,
		),
	)

	return (
		<main className="mx-auto min-h-screen max-w-7xl p-8">
			<CollectionsHeader />

			<Suspense
				fallback={
					<div className="mb-8 h-50 animate-pulse rounded-2xl bg-mars-rust/5" />
				}
			></Suspense>

			<Suspense>
				<CollectionsParent
					child1={
						<CollectionsDisplayImages
							collectionsPromise={collectionsImagesPromise}
						/>
					}
					child2={
						<CollectionsDisplayVideos
							collectionsPromise={collectionsVideosPromise}
						/>
					}
					child3={<MarsWeather />}
				/>
			</Suspense>
		</main>
	)
}
