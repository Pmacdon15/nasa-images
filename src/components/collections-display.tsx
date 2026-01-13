import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { NasaImage } from '@/types/images-types'

export default async function CollectionsDisplay({
	collectionsPromise,
}: {
	collectionsPromise: Promise<NasaImage[]>
}) {
	const collections = await collectionsPromise
	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{collections.map((item: NasaImage) => (
				<div
					className="nasa-card group flex flex-col overflow-hidden rounded-3xl ring-1 ring-white/10"
					key={item.id}
				>
					<Link
						className="relative block aspect-4/3 cursor-zoom-in overflow-hidden"
						href={(item.imageUrl ?? '#') as Route}
						rel="noopener noreferrer"
						target="_blank"
					>
						{item.imageUrl ? (
							<Image
								alt={item.title}
								className="object-cover transition-transform duration-700 group-hover:scale-110"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								src={item.imageUrl}
							/>
						) : (
							<div className="flex h-full w-full items-center justify-center bg-slate-900">
								<span className="font-medium text-slate-600">
									No Image Found
								</span>
							</div>
						)}
						<div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

						<div className="absolute top-4 right-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 font-bold text-[10px] text-white uppercase tracking-widest opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
							View Original
						</div>
					</Link>

					<div className="flex grow flex-col space-y-4 p-8">
						<h2 className="line-clamp-2 font-bold text-2xl text-slate-100 leading-tight transition-colors duration-300 group-hover:text-accent">
							{item.title}
						</h2>

						<p className="line-clamp-3 grow text-slate-400 text-sm leading-relaxed">
							{item.description}
						</p>

						<div className="flex items-center justify-between border-white/5 border-t pt-6 font-bold text-[10px] text-slate-500 uppercase tracking-[0.2em]">
							<span className="rounded bg-white/5 px-2 py-1 tracking-widest">
								{item.center}
							</span>
							<span className="text-accent">
								{item.date
									? new Date(item.date).getFullYear()
									: 'N/A'}
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
