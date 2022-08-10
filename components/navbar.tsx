import Link from 'next/link'
import styles from '../styles/navbar.module.css'

// get our fontawesome imports
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCircleXmark, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const MenuItems = ({ menuLinks, socialIcons }: MenuItemsProps) => {
	const links = menuLinks.map((item: any, index: number) =>
		<Link key={index} href={item.link} passHref={true}>
			<li> <p className={styles.menuItem}> {item.name} </p> </li>
		</Link>
	);
	return (
		<>
			{/* <div className={styles.titleHeader}>
				<h1 id={styles.title}> Shnl <br /> Photography </h1>
			</div> */}
			<nav id='translate-nav'>
				<Top />
				<ul>
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
		// <li key={id} className={styles.sIcon}> <Image src={icon} alt={icon} layout='fill' priority />  </li>
		<li key={id}>
			<FontAwesomeIcon className={styles.sIcon} icon={icon} size='sm'/>
		</li> 
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
		const width = navigation!.clientWidth;
		navigation!.style.transition = 'transform 0.3s ease-in-out';
		navigation!.style.transform = `translateX(-${width}px)`;
	}
	return (
		<div id={styles.top}>
			<FontAwesomeIcon onClick={closeMenu} id={styles.closeMenu} icon={faCircleXmark} size='sm'/>
			{/* <button> Light/Dark </button> */}
		</div>
	)
}

const HamburgerMenu = () => {
	function MenuToggle() {
		const navigation = document.querySelector('nav');
		navigation!.style.transition = 'transform 0.3s ease-in-out';
		navigation!.style.transform = `translateX(0px)`;
	}

	return(
		<div onClick={MenuToggle} id={styles.hamburger}>
			<div className={styles.hamburgerLines}></div>
			<div className={styles.hamburgerLines}></div>
			<div className={styles.hamburgerLines}></div>
		</div>
	)
};

const Nav = () => {
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

	const socialIcons = {insta: faInstagram, facebook: faFacebook, email: faEnvelope}
	
	return (
		<>
			<div className={styles.hamburgerContainer}>
				<HamburgerMenu />
			</div>
			<MenuItems menuLinks={menuLinks} socialIcons={socialIcons} />
		</>
	)
};

export default Nav;