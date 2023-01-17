import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  updateTheme: (newValue: ThemeType) => void;
};

const themeReference = {
  light: {
    backgroundColor: "#e9eae3",
    textColor: "#0b0b0b",
  },
  dark: {
    backgroundColor: "#0b0b0b",
    textColor: "#e9eae3",
  },
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const updateTheme = (newValue: ThemeType) => {
    return setTheme(newValue);
  };

  useEffect(() => {
    const { backgroundColor, textColor } = themeReference[theme];
    const { style } = document.documentElement;

    style.setProperty("--color-background", backgroundColor);
    style.setProperty("--color-text", textColor);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  return useContext(ThemeContext) as ThemeContextType;
};

export default ThemeContext;
