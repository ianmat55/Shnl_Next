import Link from 'next/link'
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
	photo_set: string[]
}

interface GalleryProps {
	images: {data: PhotoData[]}
};

export default function Gallery({ images }: GalleryProps) {
	return (
		<ul id={styles.gallery}>
			{images.data.map((data: PhotoData) => {
				const source = `https://api.shanelhonolulu.com/assets/${data.file_link}`

				return (
					<Link key={data.id} href={`/lifestyle/${data.id}`} passHref={true}> 
						<li key={data.id} className={styles.photoContainer}>
							{/* <Image className={styles.photo} key={index} loader={() => source} src={image} layout='fill' objectFit='cover' sizes='20vw' /> */}
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={source} className={styles.photo} alt={`img${data.id}`} />
						</li>
					</Link>
				)
			})}
		</ul>
	)
}



