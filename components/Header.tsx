import Link from "next/link";
import styles from "../styles/Header.module.scss";

type HeaderProps = {
  links: CustomLink[];
};

type CustomLink = {
  text: string;
  href: string;
  icon: string;
};

const Header = ({ links }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <Link href="/">Dan Forder</Link>
      <nav className={styles.navbar}>
        <ul>
          {links.map(({ text, href, icon }) => (
            <li key={href} className={styles.listItem}>
              <Link href={`#${href}`} scroll={false}>
                <span>{icon}</span>
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
