'use client'
import { useEffect, useRef } from 'react'
import maplibregl, { LngLatLike } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

export type MapMarker = { id: string; lng: number; lat: number; label?: string }

export default function Map({ center, zoom = 10, markers = [] as MapMarker[] }: { center: LngLatLike; zoom?: number; markers?: MapMarker[] }) {
	const mapRef = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		if (!mapRef.current) return
		const map = new maplibregl.Map({
			container: mapRef.current,
			style: 'https://demotiles.maplibre.org/style.json',
			center,
			zoom,
		})
		markers.forEach((m) => {
			const el = document.createElement('div')
			el.className = 'rounded-full bg-emerald-400 ring-2 ring-white w-3 h-3'
			new maplibregl.Marker({ element: el }).setLngLat([m.lng, m.lat]).addTo(map)
		})
		return () => map.remove()
	}, [center, zoom, markers])
	return <div ref={mapRef} className="w-full h-[360px] rounded-xl overflow-hidden border" />
}
