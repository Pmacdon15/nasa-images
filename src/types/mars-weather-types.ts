export interface MaasWeatherResponse {
	id: string
	terrestrial_date: string
	sol: string
	ls: string
	season: string
	min_temp: string
	max_temp: string
	pressure: string
	pressure_string: string
	abs_humidity: string
	wind_speed: string
	wind_direction: string
	atmo_opacity: string
	sunrise: string
	sunset: string
	local_uv_irradiance_index: string
	min_gts_temp: string
	max_gts_temp: string
	unitOfMeasure: string
	TZ_Data: string
}

export interface TransformedMarsWeather {
	sol: string
	date: string
	season: string
	temperature: {
		min: number
		max: number
	} | null
	windSpeed: number | null
	pressure: number | null
	atmo_opacity: string
}
