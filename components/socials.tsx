import styles from '../styles/navbar.module.css'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialIcons() {
	return (
		<ul className={styles.iconContainer}>
			<li className={styles.social_icon_wrapper} id={styles.instaIcon}>
				<div className={styles.handle_wrapper}>
					<p className={styles.handle}>
						shanellnahs
					</p>
				</div>
				<FontAwesomeIcon className={styles.sIcon} icon={faInstagram} size='sm'/>
			</li>
			<li className={styles.social_icon_wrapper} id={styles.fbIcon}>
				<div className={styles.handle_wrapper}>
					<p className={styles.handle}>
						shanellnahs
					</p>
				</div>
				<FontAwesomeIcon className={styles.sIcon} icon={faFacebook} size='sm'/>
			</li>
			<li className={styles.social_icon_wrapper} id={styles.emailIcon}>
				<div className={styles.handle_wrapper}>
					<p className={styles.handle}>
						shanellnahs
					</p>
				</div>
				<FontAwesomeIcon className={styles.sIcon} icon={faEnvelope} size='sm'/>
			</li>
		</ul>
	)
};