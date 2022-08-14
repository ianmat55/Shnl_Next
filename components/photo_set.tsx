import styles from '../styles/gallery.module.css'

export default function PhotoSet({ images }: any) {
	return (
		<ul id={styles.gallery}>
			{images.map((image: any, index: number) => {
				const source = `https://api.shanelhonolulu.com/assets/${image}`

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
