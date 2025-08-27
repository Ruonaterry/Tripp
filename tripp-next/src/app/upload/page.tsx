'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { addNewProperty } from '@/data/listings'

interface PropertyForm {
	title: string
	price: string
	location: string
	bedrooms: string
	bathrooms: string
	squareMeters: string
	description: string
	imageUrl: string
	propertyType: string
	yearBuilt: string
}

const initialForm: PropertyForm = {
	title: '',
	price: '',
	location: '',
	bedrooms: '',
	bathrooms: '',
	squareMeters: '',
	description: '',
	imageUrl: '',
	propertyType: '',
	yearBuilt: ''
}

export default function Upload() {
	const router = useRouter()
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [form, setForm] = useState<PropertyForm>(initialForm)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [errors, setErrors] = useState<Partial<PropertyForm>>({})
	const [uploadedImage, setUploadedImage] = useState<string | null>(null)
	const [isDragOver, setIsDragOver] = useState(false)

	const validateForm = (): boolean => {
		const newErrors: Partial<PropertyForm> = {}

		if (!form.title.trim()) newErrors.title = 'Title is required'
		if (!form.price.trim()) newErrors.price = 'Price is required'
		if (!form.location.trim()) newErrors.location = 'Location is required'
		if (!form.bedrooms.trim()) newErrors.bedrooms = 'Number of bedrooms is required'
		if (!form.bathrooms.trim()) newErrors.bathrooms = 'Number of bathrooms is required'
		if (!form.squareMeters.trim()) newErrors.squareMeters = 'Square meters is required'
		if (!form.description.trim()) newErrors.description = 'Description is required'
		if (!form.imageUrl.trim() && !uploadedImage) newErrors.imageUrl = 'Either upload an image or provide an image URL'
		if (!form.propertyType.trim()) newErrors.propertyType = 'Property type is required'
		if (!form.yearBuilt.trim()) newErrors.yearBuilt = 'Year built is required'

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleInputChange = (field: keyof PropertyForm, value: string) => {
		setForm(prev => ({ ...prev, [field]: value }))
		if (errors[field]) {
			setErrors(prev => ({ ...prev, [field]: undefined }))
		}
	}

	const handleFileSelect = (file: File) => {
		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader()
			reader.onload = (e) => {
				const result = e.target?.result as string
				setUploadedImage(result)
				setForm(prev => ({ ...prev, imageUrl: '' })) // Clear URL if file is uploaded
				if (errors.imageUrl) {
					setErrors(prev => ({ ...prev, imageUrl: undefined }))
				}
			}
			reader.readAsDataURL(file)
		} else {
			alert('Please select a valid image file (JPEG, PNG, GIF, etc.)')
		}
	}

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			handleFileSelect(file)
		}
	}

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
		setIsDragOver(true)
	}

	const handleDragLeave = (e: React.DragEvent) => {
		e.preventDefault()
		setIsDragOver(false)
	}

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault()
		setIsDragOver(false)
		
		const files = e.dataTransfer.files
		if (files.length > 0) {
			handleFileSelect(files[0])
		}
	}

	const removeUploadedImage = () => {
		setUploadedImage(null)
		if (fileInputRef.current) {
			fileInputRef.current.value = ''
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		
		if (!validateForm()) return

		setIsSubmitting(true)

		try {
			// Use uploaded image if available, otherwise use URL
			const imageSource = uploadedImage || form.imageUrl

			// Create new property object
			const newProperty = {
				image: imageSource,
				label: 'For Sale',
				price: `₦${form.price}`,
				specs: `${form.bedrooms} Bed • ${form.bathrooms} Bath • ${form.squareMeters} sqm`,
				location: form.location,
				lat: 6.5244, // Default to Lagos coordinates
				lng: 3.3792,
				title: form.title,
				description: form.description,
				propertyType: form.propertyType,
				yearBuilt: form.yearBuilt
			}

			// Add the new property
			const savedProperty = addNewProperty(newProperty)
			console.log('Property saved:', savedProperty)
			
			// Simulate API call delay
			await new Promise(resolve => setTimeout(resolve, 1000))

			// Show success message
			alert('Property published successfully!')
			
			// Reset form
			setForm(initialForm)
			setErrors({})
			setUploadedImage(null)
			if (fileInputRef.current) {
				fileInputRef.current.value = ''
			}
			
			// Redirect to listings page
			router.push('/listings')

		} catch (error) {
			console.error('Error publishing property:', error)
			alert('Error publishing property. Please try again.')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="max-w-4xl mx-auto space-y-6 p-4">
			<div className="text-center">
				<h1 className="text-3xl font-bold mb-2 text-text-primary">Post a Property</h1>
				<p className="text-text-secondary">List your property and reach thousands of potential buyers</p>
			</div>

			<div className="rounded-xl border border-card-border bg-card-background p-6 card">
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Basic Information */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-text-primary">Basic Information</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium mb-2 text-text-primary">Property Title *</label>
								<input
									type="text"
									value={form.title}
									onChange={(e) => handleInputChange('title', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-card-background text-text-primary placeholder:text-text-muted input ${
										errors.title ? 'border-error-color' : 'border-card-border'
									}`}
									placeholder="e.g., Beautiful 4-bedroom house in Victoria Island"
								/>
								{errors.title && <p className="text-error-color text-sm mt-1">{errors.title}</p>}
							</div>

							<div>
								<label className="block text-sm font-medium mb-2 text-text-primary">Price (₦) *</label>
								<input
									type="number"
									value={form.price}
									onChange={(e) => handleInputChange('price', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-card-background text-text-primary placeholder:text-text-muted input ${
										errors.price ? 'border-error-color' : 'border-card-border'
									}`}
									placeholder="e.g., 450000000"
								/>
								{errors.price && <p className="text-error-color text-sm mt-1">{errors.price}</p>}
							</div>

							<div>
								<label className="block text-sm font-medium mb-2 text-text-primary">Location *</label>
								<input
									type="text"
									value={form.location}
									onChange={(e) => handleInputChange('location', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-card-background text-text-primary placeholder:text-text-muted input ${
										errors.location ? 'border-error-color' : 'border-card-border'
									}`}
									placeholder="e.g., Victoria Island, Lagos"
								/>
								{errors.location && <p className="text-error-color text-sm mt-1">{errors.location}</p>}
							</div>

							<div>
								<label className="block text-sm font-medium mb-2 text-text-primary">Property Type *</label>
								<select
									value={form.propertyType}
									onChange={(e) => handleInputChange('propertyType', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-card-background text-text-primary input ${
										errors.propertyType ? 'border-error-color' : 'border-card-border'
									}`}
								>
									<option value="">Select property type</option>
									<option value="House">House</option>
									<option value="Apartment">Apartment</option>
									<option value="Townhouse">Townhouse</option>
									<option value="Villa">Villa</option>
									<option value="Penthouse">Penthouse</option>
									<option value="Duplex">Duplex</option>
								</select>
								{errors.propertyType && <p className="text-error-color text-sm mt-1">{errors.propertyType}</p>}
							</div>
						</div>
					</div>

					{/* Property Details */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-text-primary">Property Details</h2>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
							<div>
								<label className="block text-sm font-medium mb-2 text-text-primary">Bedrooms *</label>
								<input
									type="number"
									value={form.bedrooms}
									onChange={(e) => handleInputChange('bedrooms', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-card-background text-text-primary placeholder:text-text-muted input ${
										errors.bedrooms ? 'border-error-color' : 'border-card-border'
									}`}
									placeholder="3"
									min="1"
								/>
								{errors.bedrooms && <p className="text-error-color text-sm mt-1">{errors.bedrooms}</p>}
							</div>

							<div>
								<label className="block text-sm font-medium mb-2 text-text-primary">Bathrooms *</label>
								<input
									type="number"
									value={form.bathrooms}
									onChange={(e) => handleInputChange('bathrooms', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-card-background text-text-primary placeholder:text-text-muted input ${
										errors.bathrooms ? 'border-error-color' : 'border-card-border'
									}`}
									placeholder="2"
									min="1"
									step="0.5"
								/>
								{errors.bathrooms && <p className="text-error-color text-sm mt-1">{errors.bathrooms}</p>}
							</div>

							<div>
								<label className="block text-sm font-medium mb-2 text-text-primary">Square Meters *</label>
								<input
									type="number"
									value={form.squareMeters}
									onChange={(e) => handleInputChange('squareMeters', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-card-background text-text-primary placeholder:text-text-muted input ${
										errors.squareMeters ? 'border-error-color' : 'border-card-border'
									}`}
									placeholder="250"
									min="1"
								/>
								{errors.squareMeters && <p className="text-error-color text-sm mt-1">{errors.squareMeters}</p>}
							</div>

							<div>
								<label className="block text-sm font-medium mb-2 text-text-primary">Year Built *</label>
								<input
									type="number"
									value={form.yearBuilt}
									onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-card-background text-text-primary placeholder:text-text-muted input ${
										errors.yearBuilt ? 'border-error-color' : 'border-card-border'
									}`}
									placeholder="2020"
									min="1900"
									max={new Date().getFullYear()}
								/>
								{errors.yearBuilt && <p className="text-error-color text-sm mt-1">{errors.yearBuilt}</p>}
							</div>
						</div>
					</div>

					{/* Image Upload */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-text-primary">Property Image</h2>
						
						{/* File Upload Section */}
						<div className="mb-6">
							<label className="block text-sm font-medium mb-2 text-text-primary">Upload Image from Device *</label>
							<div
								onDragOver={handleDragOver}
								onDragLeave={handleDragLeave}
								onDrop={handleDrop}
								className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
									isDragOver 
										? 'border-accent-color bg-accent-color/10' 
										: 'border-card-border hover:border-accent-color/50'
								}`}
							>
								<div className="space-y-4">
									<div className="text-4xl">📸</div>
									<div className="text-lg font-medium text-text-primary">
										{isDragOver ? 'Drop your image here' : 'Drag & drop your image here'}
									</div>
									<div className="text-sm text-text-secondary">
										or click to browse from your device
									</div>
									<div className="flex justify-center gap-4">
										<button
											type="button"
											onClick={() => fileInputRef.current?.click()}
											className="px-6 py-2 rounded-lg bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover-bg transition-colors"
										>
											Choose File
										</button>
										{uploadedImage && (
											<button
												type="button"
												onClick={removeUploadedImage}
												className="px-6 py-2 rounded-lg border border-error-color text-error-color hover:bg-error-color/10 transition-colors"
											>
												Remove
											</button>
										)}
									</div>
									<input
										ref={fileInputRef}
										type="file"
										accept="image/*"
										onChange={handleFileInputChange}
										className="hidden"
									/>
									<div className="text-xs text-text-muted">
										Supports: JPG, PNG, GIF, WebP (Max 5MB)
									</div>
								</div>
							</div>
						</div>

						{/* Image URL Section */}
						<div className="mb-6">
							<label className="block text-sm font-medium mb-2 text-text-primary">Or provide Image URL</label>
							<input
								type="url"
								value={form.imageUrl}
								onChange={(e) => handleInputChange('imageUrl', e.target.value)}
								className={`w-full px-4 py-3 rounded-lg border bg-card-background text-text-primary placeholder:text-text-muted input ${
									errors.imageUrl ? 'border-error-color' : 'border-card-border'
								}`}
								placeholder="https://images.unsplash.com/photo-..."
								disabled={!!uploadedImage}
							/>
							<p className="text-sm text-text-secondary mt-1">
								{uploadedImage ? 'Image URL disabled - you have uploaded a file' : 'Enter a valid image URL (e.g., from Unsplash, your own hosting)'}
							</p>
							{errors.imageUrl && <p className="text-error-color text-sm mt-1">{errors.imageUrl}</p>}
						</div>

						{/* Image Preview */}
						{(uploadedImage || form.imageUrl) && (
							<div className="mt-4">
								<label className="block text-sm font-medium mb-2 text-text-primary">Preview</label>
								<div className="relative aspect-video w-full max-w-md rounded-lg overflow-hidden border border-card-border">
									<img
										src={uploadedImage || form.imageUrl}
										alt="Property preview"
										className="w-full h-full object-cover"
										onError={(e) => {
											e.currentTarget.src = '/house.svg'
										}}
									/>
									{uploadedImage && (
										<div className="absolute top-2 right-2 bg-success-color text-white text-xs px-2 py-1 rounded-full">
											Uploaded
										</div>
									)}
								</div>
							</div>
						)}
					</div>

					{/* Description */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-text-primary">Description</h2>
						<div>
							<label className="block text-sm font-medium mb-2 text-text-primary">Property Description *</label>
							<textarea
								value={form.description}
								onChange={(e) => handleInputChange('description', e.target.value)}
								className={`w-full px-4 py-3 rounded-lg border bg-card-background text-text-primary placeholder:text-text-muted input ${
									errors.description ? 'border-error-color' : 'border-card-border'
								}`}
								rows={6}
								placeholder="Describe your property in detail. Include features, amenities, neighborhood highlights, and what makes this property special..."
							/>
							{errors.description && <p className="text-error-color text-sm mt-1">{errors.description}</p>}
						</div>
					</div>

					{/* Submit Button */}
					<div className="flex gap-4 pt-6">
						<button
							type="button"
							onClick={() => router.push('/listings')}
							className="px-6 py-3 rounded-lg border border-card-border bg-card-background text-text-primary hover:bg-button-secondary-hover-bg transition-colors"
						>
							Cancel
						</button>
						<button
							type="submit"
							disabled={isSubmitting}
							className="px-6 py-3 rounded-lg bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover-bg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
						>
							{isSubmitting ? (
								<>
									<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
									Publishing...
								</>
							) : (
								'Publish Property'
							)}
						</button>
					</div>
				</form>
			</div>

			{/* Tips Section */}
			<div className="rounded-xl border border-card-border bg-card-background p-6 card">
				<h3 className="text-lg font-semibold mb-4 text-text-primary">Tips for a Great Listing</h3>
				<ul className="space-y-2 text-sm text-text-secondary">
					<li>• Use high-quality, well-lit photos that showcase your property's best features</li>
					<li>• Write a detailed description highlighting unique selling points</li>
					<li>• Be accurate with pricing - research similar properties in your area</li>
					<li>• Include information about nearby amenities and transportation</li>
					<li>• Respond quickly to inquiries from potential buyers</li>
					<li>• Upload images directly from your device for better quality control</li>
				</ul>
			</div>
		</div>
	)
}
