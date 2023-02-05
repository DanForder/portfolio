import Link from "next/link";
import { MouseEvent } from "react";
import { useThemeContext } from "../lib/ThemeContext";
import styles from "../styles/header.module.scss";
import { CustomLink } from "../types/CustomLink";
import IconLinks from "./IconLinks";
import Logo from "./Logo";
import Toggle from "./Toggle";

type HeaderProps = {
  links: CustomLink[];
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
        🚀
      </Link>
      <span className={styles.mainText}>
        <Logo />
      </span>
      <nav className={styles.navbar}>
        <IconLinks links={links} type="clean" />
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
