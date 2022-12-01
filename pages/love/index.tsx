import axios from "axios";
import Gallery from "components/gallery";
import { GalleryProps } from "../../shared/types";
import Header from "components/header";
import wedding6 from "../../public/assets/wedding.jpg";

export async function getStaticProps() {
  const res = await axios("https://api.shanelhonolulu.com/items/Love");
  const images = res.data;

  return {
    props: { images }, // will be passed to the page component as props
  };
}

export default function Wedding({ images }: GalleryProps) {
  return (
    <section className="content">
      <Header title="WEDDING PHOTOGRAPHY" image={wedding6} />
      <Gallery images={images} page="love" />
    </section>
  );
}
