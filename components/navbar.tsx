import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'

import facebook from '../public/assets/icons/facebook.svg'
import mail from '../public/assets/icons/minutemailer.svg'
import instagram from '../public/assets/icons/instagram.svg'
import { useWindowSizeContext } from '../utils/context'

interface MenuItemsProps {
	menuLinks: string[]
};

const MenuItems = ({ menuLinks }: MenuItemsProps) => {
	const links = menuLinks.map((item, index: number) =>
		<Link key={index} href={item.link} passHref={true}>
			<li> <p className={styles.menuItem}> {item.name} </p> </li>
		</Link>
	);
	return (
		<>
		{/* <div className={styles.titleHeader}>
			<h1 id={styles.title}> Shnl <br /> Photography </h1>
		</div> */}
		<div id={styles.menu}>
			<ul>
				{links}
			</ul>
		</div>
		</>
	);
};

interface SocialIcons {
	insta: string,
	facebook: string,
	email: string
};

const SocialIcons = ({ insta, facebook, email }: SocialIcons) => {
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

const Top = () => {
	function closeMenu() {
		const navigation = document.querySelector('nav');
		const width = navigation.clientWidth;
		navigation.style.transition = 'transform 0.3s ease-in-out';
		navigation.style.transform = `translateX(-${width}px)`;
	}
	return (
		<div id={styles.top}>
			<button onClick={closeMenu} id={styles.closeMenu}> X </button>
			{/* <button> Light/Dark </button> */}
		</div>
	)
}

const HamburgerMenu = () => {
	function MenuToggle() {
		const navigation = document.querySelector('nav');
		const width = navigation.clientWidth;
		console.log(width);
		navigation.style.transition = 'transform 0.3s ease-in-out';
		navigation.style.transform = `translateX(0px)`;
	}

	return(
		<div onClick={MenuToggle} id={styles.hamburger}>
			<div className={styles.hamburgerLines}></div>
			<div className={styles.hamburgerLines}></div>
			<div className={styles.hamburgerLines}></div>
		</div>
	)
};

const Nav = ({ setDesktopImg }) => {
	const size = useWindowSizeContext()
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
		// {
		// 	name: 'Film',
		// 	link: '/film'
		// },
		{
			name: 'Contact',
			link: '/contact'
		}
	];
	
	return (
		<>
			<div className={styles.hamburgerContainer}>
				<HamburgerMenu />
			</div>
			{/* <div id={styles.navContainer}> */}
				<nav className='translate_nav'>
					<Top />
					<MenuItems menuLinks={menuLinks} setDesktopImg={setDesktopImg} />
					<SocialIcons insta={instagram} facebook={facebook} email={mail} />
				</nav>
			{/* </div> */}
		</>
	)
};

export default Nav;