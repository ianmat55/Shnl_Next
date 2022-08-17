export interface PhotoData {
	id: number
	status: string
	image: string
	file_link: file_link
	Text: string
	user_created: string
	user_updated?: string
	date_updated?: string
	photo_set: string[]
}

export interface GalleryProps {
	images: {data: PhotoData[]}
};

export interface PhotoSetProps {
	photoSet: file_link[]
  }

export interface Size {
	width: number,
	height: number
}

export type file_link = string
