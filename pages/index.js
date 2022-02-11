import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import img2 from '../public/assets/mobile_images/img2.jpg'
import img3 from '../public/assets/mobile_images/img3.jpg'
import img4 from '../public/assets/mobile_images/img4.jpg'
import img5 from '../public/assets/mobile_images/img5.jpg'

const MobileImages = ({ mobileImages }) => {
	const [count, setCount] = useState(0);
  	const [width, setWidth] = useState(1);

  	useEffect(() => {
    	if (typeof window !== 'undefined') {
      		console.log(window.innerWidth)
      		setWidth(window.innerWidth)
    	}
  	}, [width])

	const transform = {
		transform: `translateX(-${width * count}px)`,
		transition: 'transform 0.6s ease-in-out',
		height: '100vh',
		width: '100vw',
	}

	useEffect(() => {
		const incrementCount = setInterval(() => setCount(count === mobileImages.length - 1 ? 0 : count + 1), 9000);
		console.log('hello');
		return () => clearInterval(incrementCount);
	}, [count]);

	if (width <= 1000) {
		return (
			<>
				{mobileImages.map((image, index) => {	
					return (
						<div style={transform}>	
							<Image 
								key={index}
								src={image} 
								alt='idk'
								priority
								layout='fill'
								className={styles.mobileBackground}
							/>
						</div>
				)
				})}
			</>	
		)
	} else {
		return (
			<>
				{mobileImages.map((image, index) => {	
					return (
						<div className={styles.mobileBackground}>		
							<Image
								src={image} 
								alt='idk'
								key={index}
								layout='fill'
							/>
						</div>
						
					)
				})}
			</>	
		)
	}
} 


export default function Home() {
	const mobileImages = [img2, img3, img4, img5];

	return (
		<section id={styles.home}>
			<div id={styles.slideShowDiv}>
				<MobileImages mobileImages={mobileImages} />
			</div>
		</section>
	)
};

