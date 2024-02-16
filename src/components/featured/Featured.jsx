import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, Dhanraj here!</b> Discover stories and ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem Ipsum dolor sit</h1>
          <p className={styles.postDescription}>
            Aliqua Lorem dolor eiusmod non elit et aliqua anim. Deserunt dolore
            ex ullamco voluptate culpa exercitation ipsum. Veniam ex adipisicing
            deserunt culpa veniam do quis aliqua ut eiusmod. Aute officia
            laboris irure adipisicing esse excepteur Lorem aliqua do elit
            cupidatat laborum culpa cillum. Veniam mollit velit commodo sunt eu
            dolor tempor cupidatat officia nisi adipisicing consectetur.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
