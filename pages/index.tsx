import type { NextPage } from "next";
import Head from "next/head";
import Metatags from "../components/Metatags";
import styles from "../styles/index.module.scss";

const Index: NextPage = () => {
  return (
    <>
      <Metatags />
      <h1>Portfolio</h1>
    </>
  );
};

export default Index;
