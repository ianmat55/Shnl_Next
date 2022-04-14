import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'

import facebook from '../public/assets/icons/facebook.svg'
import mail from '../public/assets/icons/minutemailer.svg'
import instagram from '../public/assets/icons/instagram.svg'

const MenuItems = ({ menuLinks }) => {
	const links = menuLinks.map((item, index) =>
		<Link key={index} href={item.link}>
			<li> <p className={styles.menuItem}> {item.name} </p> </li>
		</Link>
	);
	return (
		<div className={styles.titleHeader}>
			<ul id={styles.menu}>
				{links}
			</ul>
		</div>
	);
};

const SocialIcons = ({ insta, facebook, email }) => {
	const socialImgs = [insta, facebook, email];
	const renderIcons = socialImgs.map((icon, id) => 
		<li key={id} className={styles.sIcon}> <Image src={icon} alt={icon} layout='fill' priority />  </li> 
	)

	return (
		<ul className={styles.iconContainer}>
			{renderIcons}
		</ul>
	)
};

const Nav = ({ setDesktopImg }) => {
	const menuLinks = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Wedding',
			link: '/wedding'
		},
		{
			name: 'Lifestyle',
			link: '/lifestyle'
		},
		{
			name: 'Commercial',
			link: '/commercial',
		},
		{
			name: 'Film',
			link: '/film'
		},
		{
			name: 'Contact',
			link: '/contact'
		}
	];
	
	return (
		<div id={styles.carouselContainer}>
			<div id={styles.navContainer}>
				<nav>
					<MenuItems menuLinks={menuLinks} setDesktopImg={setDesktopImg} />
					{/* <SocialIcons insta={instagram} facebook={facebook} email={mail} /> */}
				</nav>
			</div>
		</div>
	)
};

export default Nav;