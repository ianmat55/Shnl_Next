import Image from 'next/image';
import styles from '../styles/gallery.module.css'

export default function PhotoSet({ photoSet }: any) {
	console.log(photoSet)

	const setImages = photoSet.map((imageObject: any, index: number) => {
		const data = imageObject.data
		return (
			<li key={index} className={styles.photoSetPhoto}>
					<Image className={styles.photo} src={data.filename_disk} 
					loader={({src}) => `https://api.shanelhonolulu.com/assets/${src}`} 
					alt={`photo${index}`} layout='fill' objectFit='cover' />
			</li>
		)
	})

	return (
		<ul className={styles.photoSet}>
			{setImages}
		</ul>
	)
}
