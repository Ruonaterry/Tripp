import { useState } from 'react'

export type SearchBarProps = {
	placeholder?: string
	initialValue?: string
	onSearch?: (value: string) => void
}

export default function SearchBar({ placeholder = 'City, address, or MLS #', initialValue = '', onSearch }: SearchBarProps) {
	const [value, setValue] = useState(initialValue)
	return (
		<div className="flex gap-2">
			<input
				className="flex-1 px-4 py-3 rounded-md border"
				placeholder={placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') onSearch?.(value)
				}}
			/>
			<button className="px-4 py-3 rounded-md bg-[var(--color-accent-500)] text-white" onClick={() => onSearch?.(value)}>Search</button>
		</div>
	)
}
