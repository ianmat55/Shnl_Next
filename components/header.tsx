import Image, { StaticImageData } from 'next/image'
import styles from '../styles/header.module.css'

interface HeaderProps {
    photo1: StaticImageData,
    photo2: StaticImageData,
};

export default function Header({ photo1, photo2 }: HeaderProps) {
    const header1 = photo1
    const header2 = photo2

    return (
        <div className={styles.heroSection}>
            <div className={styles.heroImage}>
                <Image src={header1} alt='header1' layout='fill' objectFit='cover' quality={100} />
            </div>
            <div className={styles.heroImage}>
                <Image src={header2} alt='header2' layout='fill' objectFit='cover' quality={100} />
            </div>
        </div>
    )
}