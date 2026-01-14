import type { MaasWeatherResponse, TransformedMarsWeather } from '@/types/mars-weather-types'

const API_URL = 'https://api.maas2.apollorion.com/'

export async function fetchMarsWeather(): Promise<TransformedMarsWeather[]> {
	'use cache'

	try {
		const res = await fetch(API_URL)

		if (!res.ok) {
			console.error('Failed to fetch Mars weather:', res.statusText)
			return []
		}

		const data = (await res.json()) as MaasWeatherResponse

		const transformedData: TransformedMarsWeather = {
			sol: data.sol,
			date: new Date(data.terrestrial_date).toLocaleDateString(
				'en-US',
				{
					month: 'short',
					day: 'numeric',
					year: 'numeric',
				},
			),
			season: data.season,
			temperature:
				data.min_temp && data.max_temp
					? {
							min: parseFloat(data.min_temp),
							max: parseFloat(data.max_temp),
						}
					: null,
			windSpeed: data.wind_speed && data.wind_speed !== '--' ? parseFloat(data.wind_speed) : null,
			pressure: data.pressure ? parseFloat(data.pressure) : null,
			atmo_opacity: data.atmo_opacity,
		}

		return [transformedData]
	} catch (error) {
		console.error('Error fetching Mars weather:', error)
		return []
	}
}
