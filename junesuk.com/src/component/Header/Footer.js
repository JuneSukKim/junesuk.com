import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Footer.module.css"
import home from "../img/home.svg";
import diary from "../img/diary.svg";
import memo from "../img/memo.svg";
import my from "../img/my.svg";

const menuItems = [
    { src: home, label: "Home", path: "/" },
    { src: diary, label: "일기장", path: "/diary" },
    { src: memo, label: "메모장", path: "/memo" },
    { src: my, label: "MY", path: "/mypage" },
  ];

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
      {menuItems.map((item, index) => (
        <div key={index} className={styles.menuContainer}>
          <Link className={styles.menu} to={item.path}>
            <br />
            <span>{item.label}</span>
          </Link>
        </div>
      ))}
    </div>
    );
}