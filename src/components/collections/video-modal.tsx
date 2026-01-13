'use client'

export default function VideoModal({
	videoUrl,
	onClose,
}: {
	videoUrl: string
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

			{/* Video container */}
			<button
				className="relative z-10 h-4/5 w-4/5"
				onClick={(e) => e.stopPropagation()}
				type="button" // prevent closing when clicking the video
			>
				<video
					autoPlay
					className="h-full w-full"
					controls
					src={videoUrl}
				>
					Your browser does not support the video tag.
				</video>
			</button>

			{/* Close button */}
			<button
				aria-label="Close modal"
				className="absolute top-4 right-4 z-20 font-bold text-2xl text-white"
				onClick={onClose}
				type="button"
			>
				&times;
			</button>
		</div>
	)
}
