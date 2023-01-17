import React, { PropsWithChildren } from "react";
import styles from "../styles/Layout.module.scss";

type LayoutProps = {};

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
