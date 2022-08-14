import Image from 'next/image'
import Link from 'next/link'
import { GalleryProps, PhotoData } from 'shared/types'
import styles from '../styles/gallery.module.css'

export default function Gallery({ images }: GalleryProps) {
	console.log(images)
	return (
		<ul id={styles.gallery}>
			{images.data.map((data: PhotoData) => {
				// const source = `https://api.shanelhonolulu.com/assets/${data.file_link}`
				return (
					<Link key={data.id} href={`/lifestyle/${data.id}`} passHref={true}> 
						<li className={styles.photoContainer}>
							<div className={styles.caption}> 
								<h1> {data.Text} </h1>
							</div>
							<Image key={data.id} src={data.file_link} 
									loader={({src}) => `https://api.shanelhonolulu.com/assets/${src}`} 
									alt={`img${data.id}`} objectFit='cover' layout='fill'
									width='100%' height='100%' />
						</li>
					</Link>
					
					// <Link key={data.id} href={`/lifestyle/${data.id}`} passHref={true}> 
					// 	<li key={data.id} className={styles.photoContainer}>
					// 		{/* eslint-disable-next-line @next/next/no-img-element */}
					// 		<img src={source} className={styles.photo} alt={`img${data.id}`} />
					// 		<div className={styles.caption}> {data.Text} </div>
					// 	</li>
					// </Link>
				)
			})}
		</ul>
	)
}



