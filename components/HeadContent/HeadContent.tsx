// Next Components
import Head from "next/head";

interface props {
  description: string;
}

const HeadContent = ({ description }: props) => {
  return (
    <Head>
      {/* COMMON TAGS */}
      <title>thearpitanand</title>
      {/* Search Engine */}
      <meta name="description" content={description} />
      <meta name="author" content="Arpit Anand" />
      <meta name="language" content="English" />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="js, npm, MongoDB, Express, yarn, Html, CSS, html5, css5, node, react js, nextjs, jwt, coding, thearpitanand, Github, version control"
      />
      <meta name="image" content="https://github.com/thearpitanand/portfolio/blob/main/public/assets/images/ogimage.png?raw=true" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="thearpitanand" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@the_arpitanand" />
      <meta name="twitter:image:src" content="https://github.com/thearpitanand/portfolio/blob/main/public/assets/images/ogimage.png?raw=true" />
      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta name="og:title" content="thearpitanand" />
      <meta name="og:description" content={description} />
      <meta name="og:image" content="https://github.com/thearpitanand/portfolio/blob/main/public/assets/images/ogimage.png?raw=true" />
      <meta name="og:url" content="https://www.thearpitanand.com/" />
      <meta name="og:site_name" content="thearpitanand" />
      <meta name="og:type" content="website" />
    </Head>
  );
};

export default HeadContent;
