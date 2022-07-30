import Image from 'next/image'
import styles from '../styles/gallery.module.css'

interface GalleryProps {
	images: string[]
};

export default function Gallery({ images }: GalleryProps) {
	// console.log(images)

	return (
		<ul id={styles.gallery}>
			{images.map((image, index) => {
				let source = `https://api.shanelhonolulu.com/assets/${image}`
				// let source = `http://localhost:8055/assets/${image}`
				return (
					<li key={index} className={styles.photoContainer}>
						{/* <Image className={styles.photo} key={index} loader={() => source} src={image} layout='fill' objectFit='cover' sizes='20vw' /> */}
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={source} className={styles.photo} alt={`img${index}`} />
					</li>
				)
			})}
		</ul>
	)
}



