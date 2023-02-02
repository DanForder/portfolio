import Link from "next/link";
import { MouseEvent } from "react";
import { useThemeContext } from "../lib/ThemeContext";
import styles from "../styles/header.module.scss";
import Logo from "./Logo";
import Toggle from "./Toggle";

type HeaderProps = {
  links: CustomLink[];
};

type CustomLink = {
  text: string;
  href: string;
  icon: string;
};

const Header = ({ links }: HeaderProps) => {
  const { theme, updateTheme } = useThemeContext();

  const handleCheck = ({ currentTarget }: MouseEvent<HTMLInputElement>) => {
    const { checked } = currentTarget;
    updateTheme(checked ? "dark" : "light");
  };

  return (
    <header className={styles.container}>
      <Link className={styles.homeLink} href="/">
        🏠
      </Link>
      <span className={styles.mainText}>
        <Logo />
      </span>
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
      <Toggle
        id="theme-toggle"
        onClick={handleCheck}
        label={"Toggle Theme"}
        toggled={theme === "dark"}
      />
    </header>
  );
};

export default Header;
