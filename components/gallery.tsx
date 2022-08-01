import styles from '../styles/gallery.module.css'

interface PhotoData {
	id: number
	status: string
	image: string
	file_link: string
	Text: string
	user_created: string
	user_updated?: string
	date_updated?: string
}

interface GalleryProps {
	images: {data: PhotoData[]}
};

export default function Gallery({ images }: GalleryProps) {
	return (
		// <h1> hello </h1>
		<ul id={styles.gallery}>
			{images.data.map((data: PhotoData) => {
				// let source = `https://api.shanelhonolulu.com/assets/${image}`
				let source = `http://128.199.9.160/assets/${data.file_link}`
				return (
					<li key={data.id} className={styles.photoContainer}>
						{/* <Image className={styles.photo} key={index} loader={() => source} src={image} layout='fill' objectFit='cover' sizes='20vw' /> */}
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={source} className={styles.photo} alt={`img${data.id}`} />
					</li>
				)
			})}
		</ul>
	)
}



