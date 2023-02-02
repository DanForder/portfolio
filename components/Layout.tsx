import React, { PropsWithChildren } from "react";
import styles from "../styles/layout.module.scss";

type LayoutProps = {};

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div className={styles.outer}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
