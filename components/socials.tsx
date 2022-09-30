import styles from '../styles/navbar.module.css'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialIcons() {
	return (
		<ul className={styles.iconContainer}>
			<li className={styles.social_icon_wrapper} id={styles.instaIcon}>
				<FontAwesomeIcon className={styles.sIcon} icon={faInstagram} size='sm'/>
				<div className={styles.handle_wrapper}>
					<p className={styles.handle}>
						shanellnahs
					</p>
				</div>
			</li>
			<li className={styles.social_icon_wrapper} id={styles.fbIcon}>
				<FontAwesomeIcon className={styles.sIcon} icon={faFacebook} size='sm'/>
				<div className={styles.handle_wrapper}>
					<p className={styles.handle}>
						shanellnahs
					</p>
				</div>
			</li>
			<li className={styles.social_icon_wrapper} id={styles.emailIcon}>
				<FontAwesomeIcon className={styles.sIcon} icon={faEnvelope} size='sm'/>
				<div className={styles.handle_wrapper}>
					<p className={styles.handle}>
						shanellnahs
					</p>
				</div>
			</li>
		</ul>
	)
};