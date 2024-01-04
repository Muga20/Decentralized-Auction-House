import React from "react";
import image from "../styles/img/products/item_5.jpg";
import { Link } from "react-router-dom";

function Auctions() {
  return (
    <div>
      <section class="py-24">
        <div class="container">
          <h2 class="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
            <span className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"></span>
            Trending
          </h2>
          <div class="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
            <article>
              <div class="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                <figure class="relative">
                  <Link to="/item">
                    <img
                      src={image}
                      alt="item 5"
                      class="w-full rounded-[0.625rem]"
                      loading="lazy"
                    />
                  </Link>
                </figure>
                <div class="mt-7 flex items-center justify-between">
                  <Link to="/item">
                    <span class="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                      Flourishing Cat #180
                    </span>
                  </Link>
                  <div class="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600"></div>
                </div>
                <div class="mt-2 text-sm">
                  <span class="mr-1 text-jacarta-700 dark:text-jacarta-200">
                    From 8.49 ETH
                  </span>
                  <span class="text-jacarta-500 dark:text-jacarta-300">
                    2/8
                  </span>
                </div>

                <div class="mt-8 flex items-center justify-between">
                  <button
                    class="font-display text-sm font-semibold text-accent"
                    data-bs-toggle="modal"
                    data-bs-target="#buyNowModal"
                  >
                   Place Bid
                  </button>
                  <a href="item.html" class="group flex items-center">
                    <span class="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                      View
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Auctions;
