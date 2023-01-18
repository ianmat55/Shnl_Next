import Image from "next/image";
import { PhotoSetObject, SortedPhotoSetData } from "shared/types";
import styles from "../styles/gallery.module.css";
import React from "react";

interface PhotoSetProps {
  photoSet: PhotoSetObject[];
  title: string;
  location: string;
}

function sortImages(photoSet: PhotoSetObject[]) {
  const header: PhotoSetObject = photoSet.filter(
    (photo) => photo.data.header
  )[0];

  const portraits: PhotoSetObject[] = [];
  const landscapes: PhotoSetObject[] = [];
  for (const photo of photoSet) {
    photo.data.landscape_portrait == "landscape"
      ? landscapes.push(photo)
      : portraits.push(photo);
  }

  let backFilledArray;

  if (landscapes.length > 0) {
    const sortedPhotos: PhotoSetObject[] = portraits.concat(landscapes);
    backFilledArray = backFillLandscapePhotos(sortedPhotos, portraits.length);
  } else {
    backFilledArray = portraits;
  }

  return { header, backFilledArray };
}

function backFillLandscapePhotos(
  photoSet: PhotoSetObject[],
  portraitCount: number
): PhotoSetObject[] {
  let landscapePos = 4; // Every x amount of photos will be landscape (zero index)
  let portrait_pointer = portraitCount;

  while (landscapePos <= photoSet.length - 1) {
    // skip last element if odd number of portraits since we want to backfill landscape photos
    if (photoSet[portrait_pointer].data.landscape_portrait !== "landscape") {
      continue;
    } else {
      // swap 5xth element with frontmost landscape photo in array
      const temp = photoSet[portrait_pointer];
      photoSet[portrait_pointer] = photoSet[landscapePos];
      photoSet[landscapePos] = temp;
      landscapePos += 5;
      portrait_pointer++;
    }
  }
  return photoSet;
}

export default function PhotoSet({ photoSet, title, location }: PhotoSetProps) {
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
          <h1 className={styles.setTitle}> {title} </h1>
          <h3> {location} </h3>
        </div>
      </div>
      <ul className={styles.photoSet}>{setImages}</ul>
    </>
  );
}
