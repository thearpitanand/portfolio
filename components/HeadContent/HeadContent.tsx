// Next Components
import Head from "next/head";

interface props {
  description: string;
}

const HeadContent = ({ description }: props) => {
  return (
    <Head>
      {/* COMMON TAGS */}
      <title>Chandni Anand</title>

      {/* Search Engine */}
      <meta name="description" content={description} />
      <meta name="author" content="Arpit Anand" />
      <meta name="language" content="English" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="ui/ux, graphic designing" />
      <meta name="image" content="/assets/images/ogimage.jpeg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="chandni-anand" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@the_arpitanand" />
      <meta name="twitter:image:src" content="/assets/images/ogimage.jpeg" />

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta property="og:title" content="chandni-anand" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/assets/images/ogimage.jpeg" />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="chandni-anand" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default HeadContent;
