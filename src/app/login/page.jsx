"use client";
import React from "react";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const { data, status } = useSession();
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  console.log(data, status);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign In With Google
        </div>
        <div className={styles.socialButton}>Sign In With Github</div>
        <div className={styles.socialButton}>Sign In With Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
