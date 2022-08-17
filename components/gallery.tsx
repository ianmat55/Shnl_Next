import Image from 'next/image'
import Link from 'next/link'
import { GalleryProps, PhotoData } from 'shared/types'
import styles from '../styles/gallery.module.css'

export default function Gallery({ images }: GalleryProps) {
	return (
		<ul id={styles.gallery}>
			{images.data.map((data: PhotoData) => {
				return (
					<Link key={data.id} href={`/lifestyle/${data.id}`} passHref={true}> 
						<li className={styles.photoContainer}>
							<div className={styles.caption}> 
								<h1> {data.Text} </h1>
							</div>
							<Image key={data.id} src={data.file_link} 
									loader={({src}) => `https://api.shanelhonolulu.com/assets/${src}`} 
									alt={`img${data.id}`} objectFit='cover' layout='fill' />
						</li>
					</Link>
				)
			})}
		</ul>
	)
}



