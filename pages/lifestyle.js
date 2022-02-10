import styles from '../styles/Lifestyle.module.css'

const Hero = () => {
	return(
		<div id={styles.lifestyleHero}>
			<h1 id={styles.lifestyleTitle}> Waikiki/ <br /> Downtown/ <br /> Nature </h1>
			<img src='https://via.placeholder.com/160x230' id={styles.img1} />
			<img src='https://via.placeholder.com/100x140' id={styles.img2} />
			<img src='https://via.placeholder.com/120x150' id={styles.img3} />
		</div>
	)
};

export default function Lifestyle() {
	return (
		<div className='tablet:content'>
			<Hero />
		</div>
	)
}