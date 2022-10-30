import Link from "next/link";
import styles from "../styles/navbar.module.css";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import SocialIcons from "./socials";

interface MenuLink {
  name: string;
  link: string;
}

interface SocialIcons {
  insta: any;
  facebook: any;
  email: any;
}

interface MenuItemsProps {
  menuLinks: MenuLink[];
}

// NEED TO REFACTOR

const MenuItems = ({ menuLinks }: MenuItemsProps) => {
  const links = menuLinks.map((item: any, index: number) => (
    <Link key={index} href={item.link} passHref={true}>
      <li>
        {" "}
        <p className={styles.menuItem}> {item.name} </p>{" "}
      </li>
    </Link>
  ));

  function closeMenu() {
    const navigation = document.querySelector("nav");
    const toggleButton = document.querySelector("#toggleIcon") as HTMLElement;
    const width = navigation!.clientWidth;
    if (width < 1000) {
      navigation!.style.transition = "transform 0.3s ease-in-out";
      navigation!.style.transform = "translateX(-300px)";
      toggleButton!.style.transform = "translateX(0px)";
    }
  }

  return (
    <>
      <nav id="translate-nav">
        <Link key="home" href="/" passHref={true}>
          <h1 id={styles.logo}> ShanelHonolulu </h1>
        </Link>
        <ul onClick={closeMenu}>{links}</ul>
        <div id={styles.nav_social_icons}>
          <SocialIcons />
        </div>
      </nav>
    </>
  );
};

const HamburgerMenu = ({ sideBar, setSideBar }: any) => {
  function menuToggle() {
    const navigation = document.querySelector("nav");
    const toggleButton = document.querySelector("#toggleIcon") as HTMLElement;
    const transition = "transform 0.3s ease-in-out";
    if (sideBar) {
      navigation!.style.transform = "translateX(-300px)";
      toggleButton!.style.transform = "translateX(0px)";
      setSideBar(false);
    } else {
      navigation!.style.transform = "translateX(0px)";
      toggleButton!.style.transform = "translateX(300px)";
      setSideBar(true);
    }
    navigation!.style.transition = transition;
    toggleButton!.style.transition = transition;
  }

  return (
    <div id="toggleIcon" className={styles.hamburgerContainer}>
      <FontAwesomeIcon
        onClick={menuToggle}
        id={styles.hamburger}
        icon={faBars}
        size="sm"
      />
    </div>
  );
};

export default function Nav() {
  const menuLinks = [
    {
      name: "Love",
      link: "/love",
    },
    {
      name: "Lifestyle",
      link: "/lifestyle",
    },
    {
      name: "Local",
      link: "/local",
    },
    {
      name: "Film",
      link: "/film",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <HamburgerMenu sideBar={sideBar} setSideBar={setSideBar} />
      <MenuItems menuLinks={menuLinks} />
    </>
  );
}
