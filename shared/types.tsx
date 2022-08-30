export interface GalleryData {
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
	images: {data: GalleryData[]}
};

interface PhotoSetData {
	id: string
	filename_disk: string
	filename_download: string
	filesize: string
	folder: string
	height: number
	width: number
	landscape_portrait: string
	title: string
}

export interface PhotoSetObject {
	data: PhotoSetData
}

export interface SortedPhotoSetData {
	header: PhotoSetObject | undefined
	backFilledArray: PhotoSetObject[]
}

export interface PhotoSetProps {
	photoSet: file_link[]
  }

export interface Size {
	width: number,
	height: number
}

export type file_link = string
