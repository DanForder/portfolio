import Head from "next/head";

export const Metatags = ({
  title = "Dan Forder Portfolio",
  description = "Dan Forder developer portfolio",
  image = "https://pbs.twimg.com/profile_images/1615743115624677378/8H4gC86W_400x400.jpg",
}) => {
  return (
    <Head>
      {/* Tab Title */}
      <title>{title}</title>

      {/* Icon */}
      <link
        rel="icon"
        href="https://pbs.twimg.com/profile_images/1615743115624677378/8H4gC86W_400x400.jpg"
      />

      {/* Metatags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@danfrdr" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default Metatags;
