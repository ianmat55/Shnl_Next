import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import img1 from '../public/assets/mobile_images/img1.jpg'
import img2 from '../public/assets/mobile_images/img2.jpg'
import img3 from '../public/assets/mobile_images/img3.jpg'
import img4 from '../public/assets/mobile_images/img4.jpg'

import desktop1 from '../public/assets/desktop_images/wedding.jpg'
import desktop2 from '../public/assets/desktop_images/lifestyle.jpg'
import desktop3 from '../public/assets/desktop_images/contact.jpg'
import desktop4 from '../public/assets/desktop_images/about.jpg'

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []); // empty array ensures effect is only run on inital render

	return windowSize;
}

const BackgroundImages = ({ images, size }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const incrementCount = setInterval(() => setCount(count === images.length - 1 ? 0 : count + 1), 9000);
		return () => clearInterval(incrementCount);
	}, [count]);

	const transform = {
		// transform: `translateX(-${size.width * count}px)`,
		// transition: 'transform 0.6s ease-in-out',
		position: 'relative',
		display: 'flex',
		height: '100vh',
		width: `${size.width * images.length}`
	}
	console.log(size.width)
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
	const size = useWindowSize();	
	let background

	if (size.width >= 800) {
		background = <BackgroundImages images={desktopImages} size={size} />
	} else {
		background = <BackgroundImages images={mobileImages} size={size} />
	};
	
	return (
		<section id={styles.home}>
			{background}
		</section>
	)
};

