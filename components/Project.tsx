import { ReactNode } from "react";
import styles from "../styles/project.module.scss";
import AnimatedText from "./AnimatedText";

type ProjectProps = {
  heading: string;
  paragraphs: ReactNode[];
};

const Project = ({ heading, paragraphs }: ProjectProps) => {
  return (
    <AnimatedText>
      <article className={styles.wrapper}>
        <h3>{heading}</h3>
        {paragraphs}
      </article>
      <hr />
    </AnimatedText>
  );
};

export default Project;
