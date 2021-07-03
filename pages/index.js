import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { getCuratedPhotos } from "../lib/api";
import Seo from "../components/seo";

export default function Home({ data }) {
  const [photos, setPhotos] = useState(data);
  const [loading, setLoading] = useState(false);
  console.log(data);

  const noOfSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const checkData = async (data) => {
    if (photos) {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    checkData();
  }, []);

  const skeleton = () => {
    return (
      <div className="p-1">
        <div className="h-28 w-28 lg:h-40 lg:w-40 rounded-lg bg-white opacity-10 animate-pulse"></div>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>Decentralized Gods</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Seo />
      <div className="h-full px-0 bg-black">
        <div className="flex justify-center items-center px-4 py-8">
          <img
            src="./decentralized-gods-logo.png"
            className="h-10 w-10 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-extrabold dark:text-white">
            Decentralized Gods
          </h1>
          <span className="text-gray-700 text-sm">by</span>

          <a
            href="https://rarible.com/user/0xcaf2f9599b41956bdfda9b5cd42c05173355bf07"
            className="mt-2 bg-white text-black hover:bg-yellow-400  transition delay-100 rounded-full px-6 py-2"
          >
            <span className="text-lg font-semibold tracking-widest">
              @JOHN SKY
            </span>
          </a>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {loading
            ? noOfSkeletons.map(() => skeleton())
            : photos.map((pic) => (
                <div className="p-1" key={pic.src.id}>
                  <img
                    src={pic.src.original}
                    alt={pic.photographer}
                    className="h-28 w-28 lg:h-40 object-cover lg:w-40 rounded-lg"
                  />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getCuratedPhotos();

  return {
    props: {
      data,
    },
  };
}
