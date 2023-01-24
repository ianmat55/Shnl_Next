import Link from "next/link";
import styles from "../styles/navbar.module.css";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Dispatch, SetStateAction, useState } from "react";
import SocialIcons from "./socials";
import React from "react";

interface MenuLink {
  name: string;
  link: string;
}

interface MenuItemsProps {
  menuLinks: MenuLink[];
  setSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuItems = ({ menuLinks, setSideBarOpen }: MenuItemsProps) => {
  const links = menuLinks.map((item: any, index: number) => (
    <Link key={index} href={item.link} passHref={true}>
      <li>
        {" "}
        <p className={styles.menuItem}> {item.name} </p>{" "}
      </li>
    </Link>
  ));

  // closes menu after link click
  function closeMenu() {
    const navigation = document.querySelector("nav");
    const toggleButton = document.querySelector("#toggleIcon") as HTMLElement;
    const width = navigation!.clientWidth;
    if (width < 1000) {
      navigation!.style.transition = "transform 0.3s ease-in-out";
      navigation!.style.transform = "translateX(-300px)";
      toggleButton!.style.transform = "translateX(0px)";
      setSideBarOpen(false);
    }
  }

  return (
    <>
      <nav id="translate-nav">
        <ul id={styles.nav_links} onClick={closeMenu}>
          {links}
        </ul>
        <div id={styles.nav_social_icons}>
          <SocialIcons />
        </div>
      </nav>
    </>
  );
};

const HamburgerMenu = ({ sideBarOpen, setSideBarOpen }: any) => {
  function menuToggle() {
    console.log(`Side open?: ${sideBarOpen}`);
    const navigation = document.querySelector("nav");
    const toggleButton = document.querySelector("#toggleIcon") as HTMLElement;
    const transition = "transform 0.3s ease-in-out";
    if (sideBarOpen) {
      console.log("close");
      navigation!.style.transform = "translateX(-300px)";
      toggleButton!.style.transform = "translateX(0px)";
      setSideBarOpen(false);
    } else {
      console.log("open");
      navigation!.style.transform = "translateX(0px)";
      toggleButton!.style.transform = "translateX(300px)";
      setSideBarOpen(true);
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
      name: "Home",
      link: "/",
    },
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
    // {
    //   name: "Film",
    //   link: "/film",
    // },
    // {
    //   name: "Contact",
    //   link: "/contact",
    // },
    // {
    //   name: "Ai",
    //   link: "/",
    // },
  ];

  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <HamburgerMenu
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      />
      <MenuItems menuLinks={menuLinks} setSideBarOpen={setSideBarOpen} />
    </>
  );
}
