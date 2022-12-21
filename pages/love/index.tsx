import axios from "axios";
import Gallery from "components/gallery";
import { GalleryProps, Size } from "../../shared/types";
import Header from "components/header";
import wedding_desktop from "../../public/assets/wedding.jpg";
import wedding_mobile from "../../public/assets/wedding_mobile.jpg";
import { useWindowSizeContext } from "utils/context";
import React from "react";

export async function getStaticProps() {
  const res = await axios("https://api.shanelhonolulu.com/items/Love");
  const images = res.data;

  return {
    props: { images }, // will be passed to the page component as props
  };
}

export default function Wedding({ images }: GalleryProps) {
  const windowSize: Size = useWindowSizeContext();
  const heroImage = windowSize!.width >= 650 ? wedding_desktop : wedding_mobile;
  return (
    <section className="content">
      <Header title="WEDDING PHOTOGRAPHY" image={heroImage} />
      <Gallery images={images} page="love" />
    </section>
  );
}
