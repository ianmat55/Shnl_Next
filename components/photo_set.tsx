import styles from '../styles/gallery.module.css'
import Image from 'next/image'

export default function PhotoSet({ images }: any) {
	return (
		<ul id={styles.gallery}>
			{images.map((image: any, index: number) => {

				return (
					<li key={index} className={styles.photoContainer}>
							<div className={styles.caption}> 
							</div>
							<Image src={image} 
									loader={({src}) => `https://api.shanelhonolulu.com/assets/${src}`} 
									alt={`img${index}`} objectFit='cover' layout='fill' />
					</li>
				)
			})}
		</ul>
	)
}
