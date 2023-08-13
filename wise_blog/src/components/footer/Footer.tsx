import React from "react";
import styles from "./page.module.css";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div className={styles.container}>
        <p>&copy;{year} Wise. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
