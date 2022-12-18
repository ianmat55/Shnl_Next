import Gallery from "../../components/gallery";
import Header from "../../components/header";
import axios from "axios";
import { GalleryProps } from "shared/types";
import lifestyle_desktop from "../../public/assets/film.jpg";

export async function getStaticProps() {
  const res = await axios("https://api.shanelhonolulu.com/items/Lifestyle");
  const images = res.data;

  return {
    props: { images }, // will be passed to the page component as props
  };
}

export default function Lifestyle({ images }: GalleryProps) {
  const heroImage = lifestyle_desktop;
  return (
    <section className="content">
      <Header title="LIFESTYLE" image={heroImage} />
      <Gallery images={images} page="lifestyle" />
    </section>
  );
}
