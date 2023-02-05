export type CustomLink = {
  text: string;
  href: string;
  icon: React.ReactNode | string;
  target?: "_blank" | "_parent" | "_self" | "_top";
};
