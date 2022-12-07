import Gallery from "../../components/gallery";
import Header from "../../components/header";
import axios from "axios";
import { GalleryProps, Size } from "shared/types";
import lifestyle_desktop from "../../public/assets/film.jpg";
import lifestyle_mobile from "../../public/assets/film_mobile.jpg";
import { useWindowSizeContext } from "utils/context";

export async function getStaticProps() {
  const res = await axios("https://api.shanelhonolulu.com/items/Lifestyle");
  const images = res.data;

  return {
    props: { images }, // will be passed to the page component as props
  };
}

export default function Lifestyle({ images }: GalleryProps) {
  const windowSize: Size = useWindowSizeContext();
  const heroImage =
    windowSize!.width >= 800 ? lifestyle_desktop : lifestyle_mobile;
  return (
    <section className="content">
      <Header title="LIFESTYLE" image={heroImage} />
      <Gallery images={images} page="lifestyle" />
    </section>
  );
}
