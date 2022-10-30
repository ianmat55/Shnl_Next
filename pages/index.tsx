import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

import mobile1 from "../public/assets/mobile_images/img1.jpg";
import mobile2 from "../public/assets/mobile_images/img2.jpg";
import mobile3 from "../public/assets/mobile_images/img3.jpg";
import mobile4 from "../public/assets/mobile_images/img4.jpg";

import desktop1 from "../public/assets/desktop_images/home1.jpeg";
import desktop2 from "../public/assets/desktop_images/home4.jpeg";
import desktop3 from "../public/assets/desktop_images/home5.jpeg";
import desktop4 from "../public/assets/desktop_images/wedding.jpg";
import desktop5 from "../public/assets/desktop_images/home6.jpeg";
import { useWindowSizeContext } from "utils/context";
import { Size } from "shared/types";
import SocialIcons from "components/socials";
import Link from "next/link";

interface BackgroundImagesProps {
  background: any[];
  size: Size;
}

const BackgroundImages = ({ background, size }: BackgroundImagesProps) => {
  const [count, setCount] = useState(0);

  const incrementCount = (int: number) => {
    console.log(int);
    if (count == 0 && int < 0) {
      return;
    }
    setCount(count === background.length - 1 ? 0 : count + int);
  };

  return (
    <div id={styles.homeBackgrounds}>
      <div id={styles.arrows}>
        <div className="leftArrow">
          <svg
            onClick={() => incrementCount(-1)}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            transform="scale(-1.5,1.5)"
            stroke="black"
            stroke-width="0.5"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
        <div className="rightArrow">
          <svg
            onClick={() => incrementCount(1)}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            transform="scale(1.5,1.5)"
            stroke="black"
            stroke-width="0.5"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
      </div>
      {/* Try to get rid of this wrapping div */}
      <div
        style={{
          transform: `translateX(-${size!.width * count}px)`,
          transition: "transform .8s ease-in-out",
          position: "relative",
          display: "flex",
          height: "100vh",
          width: `${size!.width * background.length}`,
        }}
      >
        {background.map((item, index) => {
          return (
            <div className={styles.imageWrapper} key={`img${index}`}>
              <div className={styles.header_container}>
                <Link key={index} href={item.link} passHref={true}>
                  <h1 className={styles.hero_title}> {item.title} </h1>
                </Link>
              </div>
              <Image
                src={item.image}
                alt={`img${index}`}
                className={styles.imageWrapper}
                layout="fill"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Home() {
  const mobileImages = [
    { image: mobile1.src, title: "Shnl Photography", link: "/" },
    { image: mobile2.src, title: "Love", link: "/love" },
    { image: mobile3.src, title: "Lifestyle", link: "/lifestyle" },
    { image: mobile4.src, title: "Local", link: "/local" },
  ];
  const desktopImages = [
    { image: desktop1.src, title: "Shnl Photography", link: "/" },
    { image: desktop2.src, title: "Love", link: "/love" },
    { image: desktop3.src, title: "Lifestyle", link: "/lifestyle" },
    { image: desktop4.src, title: "Local", link: "/local" },
    { image: desktop5.src, title: "Film", link: "/film" },
  ];

  const windowSize: Size = useWindowSizeContext();

  let background;
  if (windowSize!.width >= 800) {
    background = (
      <BackgroundImages background={desktopImages} size={windowSize} />
    );
  } else {
    background = (
      <BackgroundImages background={mobileImages} size={windowSize} />
    );
  }

  return (
    <section id={styles.home}>
      {background}
      <div id={styles.home_social_icons}>
        <SocialIcons />
      </div>
    </section>
  );
}
