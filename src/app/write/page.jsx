"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import styles from "./writePage.module.css";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
const WritePage = () => {
  const router = useRouter();
  const { status } = useSession();
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }
  const [open, setOpen] = useState(false);
  const [value, setvalue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setvalue}
          placeholder="Tell Your Story.."
          className={styles.textArea}
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
