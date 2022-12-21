import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeaderProps {
  title: string;
  image: StaticImageData;
}

export default function Header({ title, image }: HeaderProps) {
  return (
    <div className="headerSection">
      <div className="headerImage">
        <Image src={image} />
      </div>
      <h1 className="title"> {title} </h1>
    </div>
  );
}
