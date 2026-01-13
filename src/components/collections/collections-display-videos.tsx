'use client'

import Image from 'next/image'
import { use, useState } from 'react'
import type { NasaVideo } from '@/types/images-types'
import CollectionsPlaceHolder from './collections-placeholder'
import VideoModal from './video-modal'

export default function CollectionsDisplayVideos({
	collectionsPromise,
}: {
	collectionsPromise: Promise<NasaVideo[]>
}) {
	const videos = use(collectionsPromise)
	const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(
		null,
	)

	const openModal = (videoUrl: string) => {
		setSelectedVideoUrl(videoUrl)
	}

	const closeModal = () => {
		setSelectedVideoUrl(null)
	}

	return (
		<>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{videos.map((item: NasaVideo) => (
					<div
						className="nasa-card group flex flex-col overflow-hidden rounded-3xl ring-1 ring-white/10"
						key={item.id}
					>
						<button
							className="relative block aspect-4/3 cursor-pointer overflow-hidden"
							onClick={() =>
								item.videoUrl && openModal(item.videoUrl)
							}
							type="button"
						>
							{item.previewImageUrl ? (
								<Image
									alt={item.title}
									className="object-cover transition-transform duration-700 group-hover:scale-110"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									src={item.previewImageUrl}
								/>
							) : (
								<div className="flex h-full w-full items-center justify-center bg-slate-900">
									<span className="font-medium text-slate-600">
										No Preview Found
									</span>
								</div>
							)}
							<div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
						</button>

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
				<CollectionsPlaceHolder collectionsLength={videos.length} />
			</div>
			{selectedVideoUrl && (
				<VideoModal onClose={closeModal} videoUrl={selectedVideoUrl} />
			)}
		</>
	)
}
