import Image from "next/image";
import { PhotoSetObject, SortedPhotoSetData } from "shared/types";
import styles from "../styles/gallery.module.css";

interface PhotoSetProps {
  photoSet: PhotoSetObject[];
}

function backFillLandscapePhotos(
  photoSet: PhotoSetObject[],
  portraitCount: number
): PhotoSetObject[] {
  let landscapePos = 4; // Every x amound of photos will be a landscape
  let pointer_a = portraitCount;

  while (landscapePos <= photoSet.length - 1) {
    // skip last element if odd number of portraits since we want to backfill landscape photos
    if (photoSet[pointer_a].data.landscape_portrait !== "landscape") {
      break;
    } else {
      // swap 5xth element with frontmost landscape photo in array
      const temp = photoSet[pointer_a];
      photoSet[pointer_a] = photoSet[landscapePos];
      photoSet[landscapePos] = temp;
      landscapePos += 5;
      pointer_a++;
    }
  }
  return photoSet;
}

function sortImages(photoSet: PhotoSetObject[]) {
  let header: PhotoSetObject | undefined;
  let portraitCount = 0;
  const sortedPhotos = new Array();

  // first sort array so that landscape photos are at the end of the array
  // then iterate though list again and fill every 5xth position w/ a landscape photo where possible
  // if number of portrait photos is odd, move last portrait to end of array
  for (let i = 0; i < photoSet.length; i++) {
    console.log(photoSet[i].data);
    const isLandscape: boolean =
      photoSet[i].data.landscape_portrait == "landscape" ? true : false;

    if (photoSet[i].data.header) {
      header = photoSet[i];
    } else if (isLandscape) {
      sortedPhotos.push(photoSet[i]);
    } else {
      sortedPhotos.unshift(photoSet[i]);
      portraitCount++;
    }
  }
  if (portraitCount % 2 == 1) {
    // swap last element with last known postition of portrait element
    const temp = photoSet[sortedPhotos.length - portraitCount - 1];
    sortedPhotos[sortedPhotos.length - portraitCount - 1] =
      sortedPhotos[sortedPhotos.length - 1];
    sortedPhotos[sortedPhotos.length - 1] = temp;
  }

  const backFilledArray = backFillLandscapePhotos(sortedPhotos, portraitCount);

  return { header, backFilledArray };
}

export default function PhotoSet({ photoSet }: PhotoSetProps) {
  const photos: SortedPhotoSetData = sortImages(photoSet);
  const header = photos.header;
  photoSet = photos.backFilledArray;

  const setImages = photoSet.map((imageObject: any, index: number) => {
    const data = imageObject.data;
    const photoWidth =
      data.landscape_portrait == "landscape"
        ? styles.landscapePhoto
        : styles.portraitPhoto;
    return (
      <li key={index} className={photoWidth}>
        <Image
          src={data.file}
          loader={({ src }) => `https://api.shanelhonolulu.com/assets/${src}`}
          alt={`photo${index}`}
          layout="fill"
          objectFit="cover"
        />
      </li>
    );
  });

  const setHeader = header ? (
    <Image
      src={header.data.file}
      loader={({ src }) => `https://api.shanelhonolulu.com/assets/${src}`}
      alt={`set header`}
      layout="fill"
      objectFit="cover"
    />
  ) : undefined;

  return (
    <>
      <div className={styles.setHeader}>
        <div className={styles.headerPhoto}>{setHeader}</div>
        <div className={styles.headerDescription}>
          <p> lorem ipsum dorem </p>
        </div>
      </div>
      <ul className={styles.photoSet}>{setImages}</ul>
    </>
  );
}
