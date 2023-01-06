import Head from "next/head";

export const Metatags = ({
  title = "Dan Forder Portfolio",
  description = "Dan Forder developer portfolio",
  image = "https://i1.sndcdn.com/avatars-000560619042-lx4caj-t500x500.jpg",
}) => {
  return (
    <Head>
      {/* Tab Title */}
      <title>{title}</title>

      {/* Icon */}
      <link
        rel="icon"
        href="https://i1.sndcdn.com/avatars-000560619042-lx4caj-t500x500.jpg"
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
