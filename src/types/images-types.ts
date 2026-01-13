export type NasaImage = {
	id: string
	title: string
	description: string
	imageUrl: string | null
	date: string
	center: string
}

export type NasaApiItem = {
	href: string
	data: {
		center: string
		title: string
		nasa_id: string
		date_created: string
		keywords: string[]
		media_type: 'image' | 'video' | 'audio'
		description_508: string
		secondary_creator: string
		description: string
	}[]
	links: {
		href: string
		rel: 'preview'
		render: 'image' | 'video' | 'audio'
	}[]
}