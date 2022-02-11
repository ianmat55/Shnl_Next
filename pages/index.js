import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import img1 from '../public/assets/mobile_images/img1.jpg'
import img2 from '../public/assets/mobile_images/img2.jpg'
import img3 from '../public/assets/mobile_images/img3.jpg'
import img4 from '../public/assets/mobile_images/img4.jpg'
import img5 from '../public/assets/mobile_images/img5.jpg'

import desktop1 from '../public/assets/desktop_images/home.jpg'
import desktop2 from '../public/assets/desktop_images/wedding.jpg'
import desktop3 from '../public/assets/desktop_images/lifestyle.jpg'
import desktop4 from '../public/assets/desktop_images/contact.jpg'
import desktop5 from '../public/assets/desktop_images/about.jpg'

const BackgroundImages = ({ mobileImages, desktopImages }) => {
	const [count, setCount] = useState(0);
  	const [width, setWidth] = useState(1);

  	useEffect(() => {
    	if (typeof window !== 'undefined') {
      		console.log(window.innerWidth)
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
		height: '100vh',
		width: '100vw',
	}

	if (width <= 800) {
		return (
			<>
				{mobileImages.map((image, index) => {	
					return (
						<div key={index}>
							<Image 
								src={image} 
								alt='idk'
								priority
								layout='fill'
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
						<Image
							src={image} 
							alt='idk'
							key={index}
							priority
							layout='fill'
							className={styles.imageWrapper}
						/>					
					)
				})}
			</>	
		)
	}
} 


export default function Home() {
	const mobileImages = [img1, img2, img3, img4, img5];
	const desktopImages = [desktop1, desktop2, desktop3, desktop4, desktop5];

	return (
		<section id={styles.home}>
			<div className={styles.background}>
				<BackgroundImages mobileImages={mobileImages} desktopImages={desktopImages} />
			</div>
		</section>
	)
};

