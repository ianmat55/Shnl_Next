import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import img1 from '../public/assets/mobile_images/img1.jpg'
import img2 from '../public/assets/mobile_images/img2.jpg'
import img3 from '../public/assets/mobile_images/img3.jpg'
import img4 from '../public/assets/mobile_images/img4.jpg'
import img5 from '../public/assets/mobile_images/img5.jpg'

import desktop1 from '../public/assets/desktop_images/wedding.jpg'
import desktop2 from '../public/assets/desktop_images/lifestyle.jpg'
import desktop3 from '../public/assets/desktop_images/contact.jpg'
import desktop4 from '../public/assets/desktop_images/about.jpg'

const BackgroundImages = ({ mobileImages, desktopImages }) => {
	const [count, setCount] = useState(0);
  	const [width, setWidth] = useState(1);

  	useEffect(() => {
    	if (typeof window !== 'undefined') {
      		setWidth(window.innerWidth)
    	}
  	}, [width])

	useEffect(() => {
		const incrementCount = setInterval(() => setCount(count === mobileImages.length - 1 ? 0 : count + 1), 9000);
		return () => clearInterval(incrementCount);
	}, [count]);

	const transform = {
		transform: `translateX(-${width * count}px)`,
		transition: 'transform 0.6s ease-in-out',
		position: 'relative',
		width: '100vw',
		height: '100vh'
	}

	if (width <= 800) {
		return (
			<>
				{mobileImages.map((image, index) => {	
					return (
						<div style={transform} key={index}>
							<Image 
								src={image} 
								alt='idk'
								layout='fill'
								priority
								className={styles.imageWrapper}
							/>
						</div>		
				)
				})}
			</>	
		)
	} else {
		return (
			<>
				{desktopImages.map((image, index) => {	
					return (
						<div className={styles.backgroundContainer}>
							<Image
								src={image} 
								alt='idk'
								key={index}
								layout='fill'
								className={styles.imageWrapper}
							/>			
						</div>		
					)
				})}
			</>	
		)
	}
} 


export default function Home() {
	const mobileImages = [img1, img2, img3, img4, img5];
	const desktopImages = [desktop1, desktop2, desktop3, desktop4];

	return (
		<section id={styles.home}>
			<BackgroundImages mobileImages={mobileImages} desktopImages={desktopImages} />
		</section>
	)
};

