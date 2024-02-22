import React from "react";
import styles from "./loginPage.module.css";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sign In With Google</div>
        <div className={styles.socialButton}>Sign In With Github</div>
        <div className={styles.socialButton}>Sign In With Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
