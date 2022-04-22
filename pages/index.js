import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useWindowSizeContext } from '../components/context'

import img1 from '../public/assets/mobile_images/img1.jpg'
import img2 from '../public/assets/mobile_images/img2.jpg'
import img3 from '../public/assets/mobile_images/img3.jpg'
import img4 from '../public/assets/mobile_images/img4.jpg'

import desktop1 from '../public/assets/desktop_images/home.jpg'
import desktop2 from '../public/assets/desktop_images/lifestyle.jpg'
import desktop3 from '../public/assets/desktop_images/contact.jpg'
import desktop4 from '../public/assets/desktop_images/about.jpg'

const BackgroundImages = ({ images, size }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const incrementCount = setInterval(() => setCount(count === images.length - 1 ? 0 : count + 1), 9000);
		return () => clearInterval(incrementCount);
	}, [count, images.length]);

	const transform = {
		// transform: `translateX(-${size.width * count}px)`,
		// transition: 'transform 0.6s ease-in-out',
		position: 'relative',
		display: 'flex',
		height: '100vh',
		width: `${size.width * images.length}`
	}
	console.log(`width is ${size.width}`)
	return (	
		<div style={transform}>
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
	const mobileImages = [img1, img2, img3, img4];
	const desktopImages = [desktop1, desktop2, desktop3, desktop4];
	const size = useWindowSizeContext();	
	let background

	if (size.width >= 800) {
		background = <BackgroundImages images={desktopImages} size={size} />
	} else {
		background = <BackgroundImages images={mobileImages} size={size} />
	};
	
	return (
		<section id={styles.home}>
			<h1 id={styles.mainTitle} className='title'> Shnl <br /> Photography </h1>
			{background}
		</section>
	)
};

