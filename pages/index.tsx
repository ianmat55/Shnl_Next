import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useWindowSizeContext } from '../utils/context'

import mobile1 from '../public/assets/mobile_images/img1.jpg'
import mobile2 from '../public/assets/mobile_images/img2.jpg'
import mobile3 from '../public/assets/mobile_images/img3.jpg'
import mobile4 from '../public/assets/mobile_images/img4.jpg'

import desktop1 from '../public/assets/desktop_images/home1.jpeg'
import desktop2 from '../public/assets/desktop_images/home2.jpeg'
import desktop3 from '../public/assets/desktop_images/home3.jpg'
import desktop4 from '../public/assets/desktop_images/home4.jpeg'
import desktop5 from '../public/assets/desktop_images/home5.jpeg'
import desktop6 from '../public/assets/desktop_images/wedding.jpg'

interface BackgroundImagesProps {
	images: string[],
	size: {width: number}
}

const BackgroundImages = ({ images, size }: BackgroundImagesProps) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const incrementCount = setInterval(() => setCount(count === images.length - 1 ? 0 : count + 1), 11000);
		return () => clearInterval(incrementCount)
	}, [count, images.length]);

	return (	
		<div style={{
			transform: `translateX(-${size.width * count}px)`, 
			transition: 'transform .8s ease-in-out', 
			position: 'relative',
			display: 'flex',
			height: '100vh',
			width: `${size.width * images.length}`
		}}>
			{images.map((image, index) => {	
				return (
					<div className={styles.imageWrapper} key={`img${index}`}>
						<Image 
							src={image} 
							alt={`img${index}`}
							className={styles.imageWrapper}
							layout='fill'
						/>
					</div>		
			)
			})}
		</div>
	)
} 

export default function Home() {
	const mobileImages = [mobile1.src, mobile2.src, mobile3.src, mobile4.src]
	const desktopImages = [desktop1.src, desktop2.src, desktop3.src, desktop4.src, desktop5.src, desktop6.src]
	const size = useWindowSizeContext()
	let background

	if (size.width >= 800) {
		console.log(size.width);
		background = <BackgroundImages images={desktopImages} size={size} />
	} else {
		background = <BackgroundImages images={mobileImages} size={size} />
	};
	
	return (
		<section id={styles.home}>
			<h1 id={styles.mainTitle} className='homeTitle'> Shnl <br /> Photography </h1>
			{background}
		</section>
	)
};
