import React from "react";
import Auctions from "./Auctions";
import Gradient from "../styles/img/gradient.jpg";
import GradientDark from "../styles/img/gradient_dark.jpg";
import hero from "../styles/img/hero/hero.jpg";


function Home() {
  return (
    <div>
      <section class="relative pb-10 pt-20 md:pt-32 lg:h-[88vh]">
        <picture class="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img src={Gradient} alt="gradient" class="w-full" />
        </picture>
        <picture class="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img src={GradientDark} alt="gradient dark" class="w-full" />
        </picture>

        <div class="container h-full">
          <div class="grid h-full items-center">
            <div class="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
              <h1 class="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white md:text-left lg:text-6xl xl:text-7xl">
                Buy, sell and collect NFTs.
              </h1>
              <p class="mb-8 text-center text-lg dark:text-jacarta-200 md:text-left">
                The world's largest digital marketplace for crypto collectibles
                and non-fungible tokens
              </p>
              <div class="flex space-x-4">
                <a
                  href="create.html"
                  class="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Upload
                </a>
                <a
                  href="collections.html"
                  class="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                >
                  Explore
                </a>
              </div>
            </div>

            <div class="col-span-6 xl:col-span-8">
              <div class="relative text-center md:pl-8 md:text-right">
                <image href={hero} width="200" height="200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Auctions />
    </div>
  );
}

export default Home;
