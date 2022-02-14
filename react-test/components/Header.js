import React from "react";
import Link from "next/link";
import styles from "../style/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img
            className={styles.img}
            src="/Marvel_Logo.png"
            alt="Marvel Logo"
          />
        </a>
      </Link>
    </header>
  );
};
