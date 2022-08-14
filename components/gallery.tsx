import Link from 'next/link'
import { GalleryProps, PhotoData } from 'shared/types'
import styles from '../styles/gallery.module.css'

export default function Gallery({ images }: GalleryProps) {
	console.log(images)
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



