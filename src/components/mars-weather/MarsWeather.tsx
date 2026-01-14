import { fetchMarsWeather } from '@/Dal/fetch-mars-weather'

export default async function MarsWeather() {
	const weatherData = await fetchMarsWeather()

	if (weatherData.length === 0) {
		return (
			<section className="px-4 py-12">
				<div className="mx-auto max-w-6xl text-center">
					<h2 className="glow-text mb-6 font-bold text-3xl text-mars-orange">
						Mars Weather Service
					</h2>
					<div className="nasa-card rounded-2xl border-mars-rust p-8">
						<p className="text-foreground/70">
							No recent weather data available from InSight. The
							lander may be managing power or the sensors might be
							offline.
						</p>
						<p className="mt-4 text-foreground/50 text-sm italic">
							Check back later for updates from Elysium Planitia.
						</p>
					</div>
				</div>
			</section>
		)
	}

	return (
		<section className="relative overflow-hidden px-4 py-12">
			{/* Decorative elements */}
			<div className="absolute top-0 left-1/2 h-px w-full -translate-x-1/2 bg-linear-to-r from-transparent via-mars-rust to-transparent opacity-50" />

			<div className="mx-auto max-w-6xl">
				<div className="mb-8 flex flex-col items-end justify-between gap-4 md:flex-row">
					<div>
						<h2 className="glow-text mb-2 font-bold text-4xl text-mars-orange">
							Latest Mars Weather
						</h2>
						<p className="text-foreground/60">
							Direct from InSight Lander at Elysium Planitia
						</p>
					</div>
					<div className="text-right">
						<span className="rounded-full border border-mars-red/30 bg-mars-rust/10 px-3 py-1 font-mono text-mars-red text-sm backdrop-blur-sm">
							LAST UPDATED: 03/30/2021
						</span>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{weatherData.map((sol, index) => (
						<div
							className={`nasa-card group flex flex-col gap-4 rounded-2xl border-mars-rust/30 p-6 hover:border-mars-orange ${
								index === 0
									? 'bg-mars-rust/5 ring-1 ring-mars-orange/40'
									: ''
							}`}
							key={sol.sol}
						>
							<div className="flex items-start justify-between">
								<div>
									<h3 className="origin-left font-bold text-2xl text-mars-orange transition-transform group-hover:scale-110">
										Sol {sol.sol}
									</h3>
									<p className="font-mono text-foreground/50 text-xs">
										{sol.date}
									</p>
								</div>
								{index === 0 && (
									<span className="rounded bg-mars-orange px-2 py-0.5 font-bold text-[10px] text-background uppercase tracking-wider shadow-[0_0_10px_rgba(249,115,22,0.4)]">
										Latest
									</span>
								)}
							</div>

							<div className="flex-1 space-y-4">
								{/* Temperature */}
								<div className="relative">
									<p className="mb-1 font-semibold text-[10px] text-foreground/40 uppercase tracking-widest">
										Temperature
									</p>
									{sol.temperature ? (
										<div className="flex items-baseline gap-2">
											<span className="font-bold text-3xl text-foreground">
												{sol.temperature.avg}
											</span>
											<span className="text-foreground/60 text-sm">
												°C
											</span>
											<div className="ml-auto text-right font-mono text-[10px] leading-tight">
												<div className="text-mars-orange">
													H: {sol.temperature.max}°
												</div>
												<div className="text-blue-400">
													L: {sol.temperature.min}°
												</div>
											</div>
										</div>
									) : (
										<p className="text-foreground/30 text-sm italic">
											Data Missing
										</p>
									)}
								</div>

								{/* Wind */}
								<div>
									<p className="mb-1 font-semibold text-[10px] text-foreground/40 uppercase tracking-widest">
										Wind Speed
									</p>
									{sol.windSpeed ? (
										<div className="flex items-baseline gap-2">
											<span className="font-bold text-2xl text-foreground">
												{sol.windSpeed.avg}
											</span>
											<span className="text-foreground/60 text-xs">
												m/s
											</span>
										</div>
									) : (
										<p className="text-foreground/30 text-sm italic">
											Data Missing
										</p>
									)}
								</div>

								{/* Pressure */}
								<div>
									<p className="mb-1 font-semibold text-[10px] text-foreground/40 uppercase tracking-widest">
										Pressure
									</p>
									{sol.pressure ? (
										<div className="flex items-baseline gap-2">
											<span className="font-bold text-foreground text-lg">
												{sol.pressure.avg}
											</span>
											<span className="text-[10px] text-foreground/60">
												Pa
											</span>
										</div>
									) : (
										<p className="text-foreground/30 text-sm italic">
											Data Missing
										</p>
									)}
								</div>
							</div>

							<div className="mt-auto border-mars-rust/20 border-t pt-4">
								<p className="text-right text-[10px] text-foreground/40 capitalize italic">
									Season: {sol.season}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="nasa-card mt-12 flex flex-col items-center gap-6 rounded-2xl border-mars-rust/20 bg-mars-rust/5 p-6 md:flex-row">
					<div className="rounded-full bg-mars-orange/10 p-4 ring-1 ring-mars-orange/30">
						<svg
							aria-labelledby="mission-note-icon"
							className="h-8 w-8 text-mars-orange"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title id="mission-note-icon">Mission Note</title>
							<path
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
							/>
						</svg>
					</div>
					<div className="flex-1 text-foreground/70 text-sm leading-relaxed">
						<p className="mb-1 font-semibold text-mars-orange">
							Mission Note:
						</p>
						This service has significant missing data due to InSight
						needing to manage power use. Dust on solar panels and
						increasing distance from the sun affect power levels.
						Data is provided for each of the last seven available
						Martian Days (Sols).
					</div>
					<a
						className="whitespace-nowrap rounded-lg border border-mars-rust/40 bg-mars-rust/20 px-6 py-2 font-bold text-mars-orange transition-all hover:bg-mars-orange hover:text-background"
						href="https://mars.nasa.gov/insight/weather/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Learn More
					</a>
				</div>
			</div>
		</section>
	)
}
