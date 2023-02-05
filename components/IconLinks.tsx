import Link from "next/link";
import { generateUniqueId } from "../lib/commonUtils";
import styles from "../styles/iconLinks.module.scss";
import { CustomLink } from "../types/CustomLink";

type IconLinks = {
  links: CustomLink[];
  type: "tile" | "clean";
};

const IconLinks = ({ links, type }: IconLinks) => {
  return (
    <ul className={styles.list}>
      {links.map(({ text, href, icon, target }) => (
        <li
          key={generateUniqueId()}
          className={`${styles.listItem} ${styles[type]}`}
        >
          <Link
            className={styles.link}
            href={href}
            scroll={false}
            target={target}
            rel="noreferrer"
          >
            <span className={styles.icon}>{icon}</span>
            <span>{text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default IconLinks;
