import React from 'react'

type SkeletonProps = {
	className?: string
	as?: keyof JSX.IntrinsicElements
}

export default function Skeleton({ className = '', as = 'div' }: SkeletonProps) {
	const Tag: any = as
	return (
		<Tag
			className={`relative overflow-hidden bg-[var(--color-surface-2)] ${className}`}
			aria-hidden="true"
		>
			<span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent motion-safe:animate-[shimmer_1.6s_linear_infinite] [background-size:1000px_100%]" />
		</Tag>
	)
}
