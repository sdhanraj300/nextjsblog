import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.post}>
        {item.img && (
          <div className={styles.imageContainer}>
            <Image src={item.img} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>
              {item.createdAt.substring(0, 10)} -
            </span>
            <span className={styles.category}>{item.catSlug}</span>
          </div>
          <Link href={`/posts/${item.slug}`}>
            <h1>I{item.title}</h1>
          </Link>
          <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
          <Link className={styles.link} href={`/posts/${item.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
