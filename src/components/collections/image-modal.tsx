'use client'

import Image from 'next/image'

export default function ImageModal({
	imageUrl,
	onClose,
}: {
	imageUrl: string
	onClose: () => void
}) {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop as a button for accessibility */}
			<button
				aria-label="Close modal"
				className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
				onClick={onClose}
				type="button"
			/>

			{/* Image container */}
			<button
				className="relative z-10 h-4/5 w-4/5"
				onClick={(e) => e.stopPropagation()}
				type="button" // prevent closing when clicking image
			>
				<Image
					alt="Enlarged image"
					className="object-contain"
					fill
					src={imageUrl}
				/>
			</button>

			{/* Close button */}
			<button
				aria-label="Close modal"
				className="absolute top-4 right-4 z-20 font-bold text-3xl text-white"
				onClick={onClose}
				type="button"
			>
				&times;
			</button>
		</div>
	)
}
