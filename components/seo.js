import { NextSeo } from "next-seo";

const Seo = () => (
  <>
    <NextSeo
      title="Decentralized Gods - Showcase website"
      description="This showcase website is a platform to showcase the different kinds of art by the decentralized gods. The webiste is a web portal used by individuals and organisations to showcase talent through Art and NFT's. The NFT arts can be found on www.rarible.com"
      openGraph={{
        url: "https://www.url.ie/a",
        title: "Open Graph Title",
        description: "Open Graph Description",
        images: [
          {
            url: "https://www.example.ie/og-image-01.jpg",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
          {
            url: "https://www.example.ie/og-image-02.jpg",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
          },
          { url: "https://www.example.ie/og-image-03.jpg" },
          { url: "https://www.example.ie/og-image-04.jpg" },
        ],
        site_name: "Decentralized Gods",
      }}
      twitter={{
        handle: "@johnybas",
        site: "@site",
        cartType: "summary_large_image",
      }}
    />
  </>
);

export default Seo;
