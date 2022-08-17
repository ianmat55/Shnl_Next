import styles from '../styles/gallery.module.css'
import Image from 'next/image'
import { file_link } from 'shared/types'

export default function PhotoSet({ images }: any) {
	return (
		<ul id={styles.photo_set}>
			{images.map((image: file_link, index: number) => {
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
