import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>11.02.2023 -</span>
            <span className={styles.category}>Culture</span>
          </div>
          <Link href="/">
            <h1>I{item.title}</h1>
          </Link>
          <p className={styles.desc}>
            Mollit magna exercitation elit qui consequat cupidatat id labore
            sint. Id eu do irure consequat cillum est minim mollit pariatur
            pariatur laboris cillum. Dolore laborum nostrud et do incididunt
            officia exercitation nulla aliqua. Dolor magna ipsum est dolore.
          </p>
          <Link className={styles.link} href="/">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
