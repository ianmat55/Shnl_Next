import axios from "axios";
import PhotoSet from "components/photo_set";

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios("https://api.shanelhonolulu.com/items/Lifestyle");
  const photos = res.data;
  // Get the paths we want to pre-render based on posts
  const paths = photos.data.map((res: any) => ({
    params: { set: res.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const photoSetId = params.set;
  const res = await axios(
    `https://api.shanelhonolulu.com/items/Lifestyle/${photoSetId}`
  );
  const fileList = res.data.data.photo_set;
  const photoSet = await Promise.all(
    fileList.map(async (file: any) => {
      const res = await axios(
        `https://api.shanelhonolulu.com/items/Lifestyle_Sets/${file}`
      );
      return res.data;
    })
  );

  const title = res.data.data.title;
  const location = res.data.data.location;

  return {
    props: {
      photoSet,
      title,
      location,
    },
  };
}

export default function PhotoSetPage({ photoSet, title, location }: any) {
  return (
    <section className="content">
      <PhotoSet photoSet={photoSet} title={title} location={location} />
    </section>
  );
}
