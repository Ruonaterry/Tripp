'use client'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

export default function ImageWithFallback(props: ImageProps & { fallbackSrc?: string }) {
	const { fallbackSrc = '/house.svg', alt, ...rest } = props
	const [src, setSrc] = useState(rest.src)
	return (
		<Image
			{...rest}
			alt={alt}
			src={src}
			onError={() => setSrc(fallbackSrc)}
		/>
	)
}
