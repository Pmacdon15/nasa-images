import { Suspense } from 'react'
import CollectionsDisplay from '@/components/collections-display'
import CollectionsHeader from '@/components/collections-header'
import CollectionsPlaceHolder from '@/components/collections-placeholder'
import { fetchImages } from '@/Dal/fetch-types-of-images'

export default async function NasaImagesPage(props: PageProps<'/'>) {
	const collectionsPromise = props.searchParams.then((params) =>
		fetchImages(
			String(params.search) !== 'undefined'
				? String(params.search)
				: 'nebula',
			Number(params.page) || 1,
		),
	)
	const collectionsLengthPromise = collectionsPromise.then(
		(collections) => collections.length,
	)

	return (
		<main className="mx-auto min-h-screen max-w-7xl p-8">
			<CollectionsHeader />

			<Suspense>
				<CollectionsDisplay collectionsPromise={collectionsPromise} />
			</Suspense>

			<Suspense>
				<CollectionsPlaceHolder
					collectionsLengthPromise={collectionsLengthPromise}
				/>
			</Suspense>
		</main>
	)
}
