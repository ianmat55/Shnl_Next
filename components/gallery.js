import Image from 'next/image'
import styles from '../styles/gallery.module.css'

export default function Gallery({ images }) {
	// console.log(images)

	return (
		<div id={styles.gallery}>
			{images.map((image, index) => {
				// let source = `https://shanelhonolulu.com/assets/${image}`
				let source = `http://localhost:8055/assets/${image}`
				return (
					<Image key={index} loader={() => source} src={image} width={400} height={300} />
				)
			})}
		</div>
	)
}



