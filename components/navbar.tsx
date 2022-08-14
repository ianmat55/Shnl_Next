import Link from 'next/link'
import styles from '../styles/navbar.module.css'

// get our fontawesome imports
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

interface MenuLink {
	name: string,
	link: string
}

interface SocialIcons {
	insta: any,
	facebook: any,
	email: any
}

interface MenuItemsProps {
	menuLinks: MenuLink[]
	socialIcons: SocialIcons
}

// NEED TO REFACTOR 

const MenuItems = ({ menuLinks, socialIcons }: MenuItemsProps) => {
	const links = menuLinks.map((item: any, index: number) =>
		<Link key={index} href={item.link} passHref={true}>
			<li> <p className={styles.menuItem}> {item.name} </p> </li>
		</Link>
	);

	function closeMenu() {
		const navigation = document.querySelector('nav');
		const toggleButton = document.querySelector('#toggleIcon') as HTMLElement
		const width = navigation!.clientWidth;
		if (width < 1000) {
			navigation!.style.transition = 'transform 0.3s ease-in-out';
			navigation!.style.transform = 'translateX(-300px)';
			toggleButton!.style.transform = 'translateX(0px)';
		}
	}

	return (
		<>
			<nav id='translate-nav'>
				<h1 id={styles.logo}> ShanelHonolulu </h1>
				<ul onClick={closeMenu}>
					{links}
				</ul>
				<SocialIcons insta={socialIcons.insta} facebook={socialIcons.facebook} email={socialIcons.email}/>
			</nav>
		</>
	);
};

const SocialIcons = ({ insta, facebook, email }: SocialIcons) => {
	const socialImgs = [insta, facebook, email];
	const renderIcons = socialImgs.map((icon, id) => 
		<li key={id}>
			<FontAwesomeIcon id={`sIcon${id}`} className={styles.sIcon} icon={icon} size='sm'/>
		</li> 
	)

	return (
		<ul className={styles.iconContainer}>
			{renderIcons}
		</ul>
	)
};

const HamburgerMenu = ({ sideBar, setSideBar }: any) => {
	
	function menuToggle() {
		const navigation = document.querySelector('nav')
		const toggleButton = document.querySelector('#toggleIcon') as HTMLElement
		const transition = 'transform 0.3s ease-in-out'
		if (sideBar) {
			navigation!.style.transform = 'translateX(-300px)'
			toggleButton!.style.transform = 'translateX(0px)'
			setSideBar(false)
		} else {
			navigation!.style.transform = 'translateX(0px)'
			toggleButton!.style.transform = 'translateX(300px)'
			setSideBar(true)
		}
		navigation!.style.transition = transition
		toggleButton!.style.transition = transition
	}

	return(
		<div id='toggleIcon' className={styles.hamburgerContainer}> 
			<FontAwesomeIcon onClick={menuToggle} id={styles.hamburger} icon={faBars} size='sm' />
		</div>
	)
};

export default function Nav() {
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
			name: 'Contact',
			link: '/contact'
		}
	];

	const [sideBar, setSideBar] = useState(false)

	const socialIcons = {insta: faInstagram, facebook: faFacebook, email: faEnvelope}

	return (
		<>
			<HamburgerMenu sideBar={sideBar} setSideBar={setSideBar} />
			<MenuItems menuLinks={menuLinks} socialIcons={socialIcons} />
		</>
	)
};
