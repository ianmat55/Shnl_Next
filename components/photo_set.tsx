import Image from 'next/image';
import styles from '../styles/gallery.module.css'
import { file_link } from 'shared/types'
import { useState } from 'react';

export default function PhotoSet({ images }: any) {
	const [width, setWidth] = useState('0');
	const setImages = images.map((image: file_link, index: number) => {
		return (
			<li key={index} className={styles.photoSetPhoto} style={{width: width}}>
					<Image className={styles.photo} src={image} 
					loader={({src}) => `https://api.shanelhonolulu.com/assets/${src}`} 
					alt={`photo${index}`} layout='fill' objectFit='contain'
					onLoad={({ target }) => {
						const { naturalWidth, naturalHeight } = target as HTMLImageElement;
						console.log(naturalWidth)
						setWidth(`${naturalWidth}`);
					}} />
			</li>
		)
	}			
	)

	return (
		<ul className={styles.photoSet}>
			{setImages}
		</ul>
	)
}
