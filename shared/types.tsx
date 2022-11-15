export interface GalleryData {
  id: number;
  status: string;
  image: string;
  file: file_link;
  title: string;
  user_created: string;
  user_updated?: string;
  date_updated?: string;
  photo_set: string[];
}

export interface GalleryProps {
  images: { data: GalleryData[] };
  page: string;
}

interface PhotoSetData {
  id: string;
  file: string;
  filename_download: string;
  filesize: string;
  folder: string;
  height: number;
  header: boolean;
  width: number;
  landscape_portrait: string;
  title: string;
}

export interface PhotoSetObject {
  data: PhotoSetData;
}

export interface SortedPhotoSetData {
  header: PhotoSetObject | undefined;
  backFilledArray: PhotoSetObject[];
}

export interface Size {
  width: number;
  height: number;
}

export type file_link = string;
