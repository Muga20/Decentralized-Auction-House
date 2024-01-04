import React from "react";
import image from "../styles/img/products/item_5.jpg";
import { Link } from "react-router-dom";

function Listings() {
  return (
    <div>
      <section class="py-24">
        <div class="container">
          <h2 class="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
            <span
              className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
              style={{
                backgroundImage: `url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png)`,
              }}
            ></span>
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
                  <div class="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                    <a
                      href="#"
                      class="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                      role="button"
                      id="itemActions"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        width="16"
                        height="4"
                        viewBox="0 0 16 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="fill-jacarta-500 dark:fill-jacarta-200"
                      >
                        <circle cx="2" cy="2" r="2" />
                        <circle cx="8" cy="2" r="2" />
                        <circle cx="14" cy="2" r="2" />
                      </svg>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                      aria-labelledby="itemActions"
                    >
                      <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        New bid
                      </button>
                      <hr class="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                      <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Refresh Metadata
                      </button>
                      <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Share
                      </button>
                      <button class="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Report
                      </button>
                    </div>
                  </div>
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
                    Buy now
                  </button>
                  <a href="item.html" class="group flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      class="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                    </svg>
                    <span class="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                      View History
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

export default Listings;
