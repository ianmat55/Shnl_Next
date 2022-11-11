import Image from "next/image";
import Link from "next/link";
import { GalleryProps, GalleryData } from "shared/types";
import styles from "../styles/gallery.module.css";

export default function Gallery({ images, page }: GalleryProps) {
  const galleryImages = images.data.map((data: GalleryData) => {
    return (
      <Link key={data.id} href={`/${page}/${data.id}`} passHref={true}>
        <li className={styles.photoContainer}>
          <div className={styles.caption}>
            <h1> {data.Text} </h1>
          </div>
          <Image
            key={data.id}
            src={data.file}
            loader={({ src }) => `https://api.shanelhonolulu.com/assets/${src}`}
            alt={`img${data.id}`}
            objectFit="cover"
            layout="fill"
          />
        </li>
      </Link>
    );
  });
  return <ul className={styles.gallery}>{galleryImages}</ul>;
}
