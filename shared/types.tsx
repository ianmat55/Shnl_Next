export interface PhotoData {
	id: number
	status: string
	image: string
	file_link: string
	Text: string
	user_created: string
	user_updated?: string
	date_updated?: string
	photo_set: string[]
}

export interface GalleryProps {
	images: {data: PhotoData[]}
};
