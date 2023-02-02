import { ReactNode } from "react";
import styles from "../styles/project.module.scss";
import AnimatedText from "./AnimatedText";

type ProjectProps = {
  heading: string;
  paragraphs: ReactNode[];
  image?: ReactNode;
  inverse?: boolean;
};

const Project = ({ heading, paragraphs, image, inverse }: ProjectProps) => {
  let className = styles.container;

  if (inverse) {
    className += " " + styles.inverse;
  }

  return (
    <AnimatedText>
      <div className={className}>
        {image}
        <article className={styles.wrapper}>
          <h3>{heading}</h3>
          {paragraphs}
        </article>
      </div>
      <hr />
    </AnimatedText>
  );
};

export default Project;
